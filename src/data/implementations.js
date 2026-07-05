export const implementations=[
    {
        id:"lenet",
         title: "Lenet Implementation",
        name:"LeNet-5 Implementation",
        intro: "Recreated the classic CNN architecture for handwritten digit classification.",
        tech:["PyTorch","CNN","MNIST"],
        accuracy:"98.5",
        dataset:"MNIST",
        details:
      "Implemented convolution layers, pooling, and fully connected layers from scratch. Explored gradient flow and optimization techniques.",
        github: "https://github.com/yourusername/lenet",
    },
    {
     id: "alexnet",
    title: "AlexNet Implementation",
    intro:
      "Rebuilt AlexNet architecture for image classification tasks.",
    tech: ["PyTorch", "Deep CNN", "CIFAR-10"],
    accuracy: "84%",
    dataset: "CIFAR-10",
    details:
      "Implemented deep convolutional stacks, dropout regularization, and ReLU activations. Compared performance with baseline CNN.",
    github: "https://github.com/yourusername/alexnet",
  },
  {
    id: "custom-cnn",
    title: "Custom CNN from Scratch",
    intro:
      "Designed a CNN architecture to experiment with hyperparameters and model depth.",
    tech: ["Python", "NumPy", "Backpropagation"],
    accuracy: "91%",
    dataset: "Custom Dataset",
    image: "/implementations/lenet.png",
    details:
      "Built convolution operations manually, implemented backpropagation logic, and experimented with learning rate tuning.",
    github: "https://github.com/yourusername/custom-cnn",
  },

]