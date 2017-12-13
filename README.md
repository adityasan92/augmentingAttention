# Augmenting Attention via Bayesian Exploration 

A course project for https://csc2541-f17.github.io. 

This code is build on https://github.com/jtkim-kaist/ram_modified. 

## Getting Started

Clone the repo using git clone https://github.com/adityasan92/augmentingAttention

There are several prominent hyperparameters in the code, to modify them you need to change variables in the files in the repo. The flags are: 
1.	translateMnist: Value 1 represents non-centered MNIST dataset and value 0 represents centered MNIST dataset. Default value is 1. 
2.	add_intrinsic_reward: If you want dropout to be applied to the network without affecting the reward the value is False. Otherwise, if the reward is added the value is True. Default value is True. 
3.	stochastic_regularization_type: Determined the SRT used in ram_srt.py file. ‘D’ represents dropout and ‘MG’ represents multiplicative gaussian. Default value is ‘D’. 
4.	dropout_prob: If the SRT is ‘D’, you can change the parameter for Bernoulli Distribution. The default value is 0.25. 
5.	eta: This hyperparameter represents the amount of intrinsic reward that should be added to the total reward. The default value is 4. 
6.	noOfForwardPasses: This hyperparameter represents the number of stochastic forward passes we will use to determine the intrinsic reward.  Default value is 5
7.	nGlimpses: The number of glimpses the network should look in the image. The default value is 6
8.	eval_only: This parameter decides if the network is in training or testing mode. False represents the network is training and true represents the network is testing. Default value is false. 

To run the code with concrete dropout, run the command: 
```
python ram_concrete_dropout.py
```
 
To run the code with other SRT's, run the command:  

```
python python ram_srt.py
```

To run the orginal RAM code from https://github.com/jtkim-kaist/ram_modified :  

```
python python ram_modified.py
```

To run the orginal RAM code, which we modified slightly:  

```
python python ram_vanilla.py
```

To do data analysis, you can use the parsers in the folder ./data_analysis. 

Once you have created the parsers toy can analyse and make different graphs using ipython tutorials showed in ./data_analysis  

### Prerequisites

Install the following:
```
1. Python 
2. Tensorflow
3. Node (if you want to use the parsers we provide)
```

## Authors

* **Aditya Sanghi** 
* **Tristian**

## Acknowledgments

* **We modified the code present in the repo: https://github.com/jtkim-kaist/ram_modified.**
* Inspirations: https://papers.nips.cc/paper/5542-recurrent-models-of-visual-attention.pdf, https://arxiv.org/pdf/1605.09674.pdf, https://authors.library.caltech.edu/13793/1/MACnc92b.pdf, http://www.cs.ox.ac.uk/people/yarin.gal/website/blog_2248.html

