import torch
import torch.nn as nn
import torch.optim as optim
from torch.utils.data import TensorDataset, DataLoader
from torch.autograd import grad

# Check GPU access
if torch.backends.mps.is_available():
    device = torch.device("mps")
    x = torch.ones(1, device=device)
    print (x)
else:
    print ("MPS device not found.")

# Make a single 1x1x1x1 tensor with a class label
single_image = torch.randn(1, 1, 1, 1)
class_label = torch.tensor([0])

# Create a TensorDataset
dataset = TensorDataset(single_image, class_label)

# Create a DataLoader
batch_size = 1  # Since there's only one image
data_loader = DataLoader(dataset, batch_size=1)

# Define simple generator
class generator(nn.Module):
    def __init__(self, input_size=1):
        super(generator, self).__init__()
        self.input_size = input_size

        self.fc = nn.Sequential(
            nn.Linear(1, self.input_size * self.input_size),
        )
        
    def forward(self, input):
        x = self.fc(input)
        x = x.view(-1, 1, self.input_size, self.input_size)

        return x

# Define simple discriminator
class discriminator(nn.Module):
    def __init__(self, input_size=1):
        super(discriminator, self).__init__()
        self.input_size = input_size
        
        self.simple = nn.Sequential(
                        nn.Flatten(),
                        nn.Linear(input_size * input_size, 1),
                      )
        

    def forward(self, input):
        x = self.simple(input)

        return x

# Define "WGAN" object
class WGAN_GP(object):
    def __init__(self):
        # parameters
        self.batch_size = 1
        self.z_dim = 1
        self.data_loader = data_loader

        # initialize generator and discriminator
        self.G = generator()
        self.D = discriminator()
        self.G_optimizer = optim.Adam(self.G.parameters())
        self.D_optimizer = optim.Adam(self.D.parameters())

        # Move networks to GPU
        self.G = self.G.to(device)
        self.D = self.D.to(device)

    # Method to train the networks
    def train(self):
        # Set networks to training mode
        self.D.train()
        self.G.train()
        
        # Iterate over training data
        for iter, (x_, _) in enumerate(self.data_loader):

            # Generate random data to feed to generator
            z_ = torch.rand((self.batch_size, self.z_dim))
            
            # Move digit data and random data to GPU
            x_, z_ = x_.to(device), z_.to(device)

            # Get generator output
            G_ = self.G(z_)

            # Get data from the loader and make it require grad
            x_hat = x_.data
            x_hat.requires_grad_(True)

            # Get the discriminator prediction of the real data
            pred_hat = self.D(x_hat)

            # Get gradients, using retain_graph=True changes nothing
            gradients = grad(outputs=pred_hat, inputs=x_hat, grad_outputs=torch.ones(pred_hat.size()).to(device),
                             create_graph=True, only_inputs=True)[0]

            # Get mean of gradients to make penalty term
            gradient_penalty = gradients.view(gradients.size()[0], -1).mean()

            # Set loss equal to gradient penalty
            D_loss = gradient_penalty

            D_loss.backward()
            self.D_optimizer.step()

wgan = WGAN_GP()
wgan.train()
