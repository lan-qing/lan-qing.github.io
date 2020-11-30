var tipuesearch = {"pages": [{"title": "A note of A Survey on Transfer Learning","text": "A note of A Survey on Transfer Learning<br/>Introduction<br/>Applied range<br/>knowledge transfer  or transfer learning would be desirable when it is expensive or impossible to recollect the needed training data and rebuild the models.<br/>Examples<br/><br/><br/>Web-document classification<br/>To classify a given Web document into several predefined categories. <br/>For example, the labeled examples may be the university webpages. But the newly created website may have different data features or data distributions. <br/><br/><br/>Data which outdate easily <br/>Example: indoor WiFi localization problems. We wish to adapt the localization model trained in one time period (the source domain) for a new time period (the target domain), or to adapt the localization model trained on a mobile device (the source domain) for a new mobile device (the target domain)<br/><br/><br/>The problem of sentiment classification<br/>To adapt a classification model that is trained on some products to help learn classification models for some other products<br/><br/><br/>Overview<br/>Brief History<br/>History<br/><br/><br/>Traditional machine learning algorithms: make predictions on the future data using statistical models that are trained on previously collected training data<br/><br/><br/>Semisupervised classification: much unlabeled data, little labeled data. Assume they are the same.<br/><br/><br/>Transfer Learning<br/><br/><br/>Motivation: People can intelligently apply knowledge learned previously to solve new problems<br/><br/><br/>Fundamental motivation: A NIPS-95 workshop on “Learning to Learn”<br/><br/><br/>Different names: learning to learn, life-long learning, knowledge transfer, inductive transfer, multitask learning, knowledge consolidation, context-sensitive learning, knowledge-based inductive bias, metalearning, and incremental/cumulative learning<br/><br/><br/>New definition: the ability of a system to recognize and apply knowledge and skills learned in previous tasks to novel tasks.<br/><br/>Difference between transfer learning and mutitask learning: transfer learning cares most about the target task, while multitask learning learning all of the source and target tasks simultaneously<br/><br/><br/><br/>Top venues: <br/><br/>data mining: ACM KDD, IEEE ICDM, and PKDD, for example<br/>machine learning: ICML, NIPS, ECML, AAAI, and IJCAI, for example<br/>applications of machine learning and data mining: ACM SIGIR, WWW, and ACL, for example<br/><br/><br/><br/>Notations and Definitions<br/>Definitions of “Domain” and “Task”<br/>A domain $D$ consists of two components: a feature space $\\mathcal{X}$ and a marginal probability distribution $P(X)$, where $X = \\{x_1, \\dots, x_n\\} \\in \\mathcal{X}$.<br/>A task consists of two components: a label space $\\mathcal{Y}$ and an objective predictive function $f(\\cdot)$.<br/>This survey only consider one source domain $\\mathcal{D}_S$, one target domain $\\mathcal{D}_T$ and usually $0 \\le N_T \\ll N_S$.<br/>Unified definition<br/>Transfer Learning: Given a source domain $\\mathcal{D}_S$ and learning task $\\mathcal{T}_S$, a target domain $\\mathcal{D}_T$ and learning task $\\mathcal{T}_T$, transfer learning aims to help improve the learning of the target predictive function $f_T(\\cdot)$ in $\\mathcal{D}_T$ using the knowledge in $\\mathcal{D}_S$ and $\\mathcal{T}_S$,where $\\mathcal{D}_S \\neq \\mathcal{D}_T$, or $\\mathcal{T}_S \\neq \\mathcal{T}_T$.<br/>A Categorization of Transfer Learning Techniques<br/>Three main research issues:<br/><br/>what to transfer<br/>how to transfer<br/>when to transfer<br/><br/>Three subsettings:<br/><br/>inductive transfer learning<br/>transductive transfer learning<br/>unsupervised transfer learning<br/><br/>inductive transfer learning<br/>The target task is different from the source task, no matter when the source and target domains are the same or not.<br/>Two cases:<br/>1. A lot of labeled data in the source domain are available.<br/>2. No labeled data in the source domain are available.<br/>transductive transfer learning<br/>The source and target tasks are the same, while the source and target domains are different.<br/>Two cases:<br/>1. $\\mathcal{X}_S \\neq \\mathcal{X}_T$.<br/>2. $\\mathcal{X}_S = \\mathcal{X}_T$ but $P(X_S) \\neq P(X_T)$.<br/>unsupervised transfer learning<br/>no labeled data available in both source and target domains in training.<br/>Inductive transfer learning<br/>Inductive transfer learning: Given a source domain $\\mathcal{D}_S$ and a learning task $\\mathcal{T}_S$, a target domain $\\mathcal{D}_T$ and a learning task $\\mathcal{T}_T$, inductive transfer learning aims to help improve the learning of the target predictive function $f_T(\\cdot)$ in $\\mathcal{D}_T$ using the knowledge in $\\mathcal{D}_S$ and $\\mathcal{T}_S$ where $\\mathcal{T}_S \\neq \\mathcal{T}_T$.<br/>Transferring Knowledge of Instances<br/>a boosting algorithm: TrAdaBoost<br/>Transferring Knowledge of Feature Representations<br/>Aims at finding “good” feature representations to minimize domain divergence and classi- fication or regression model error. <br/>Similar to common feature learning in the field of multitask learning<br/>Supervised Feature Construction<br/>In the inductive transfer learning setting, the common features can be learned by solving an optimization problem, given as follows:<br/>$$ argmin_{A, U} \\sum_{t \\in \\{T, S\\}} \\sum_{i=1}^{n_t} L(y_{t_i}, \\langle a_t, U^T x_{t_i}\\rangle) + \\gamma ||A||^2_{2, 1}$$ <br/>$$s.t. U \\in \\mathbf{O}^d .$$<br/>Unsupervised Feature Construction<br/>Sparse coding is an unsupervised feature construction method for learning higher level features for transfer learning. It consists of two steps.<br/>In the first step, higher level basis vectors $b = \\{b_1, b_2, \\dots, b_s\\}$ are learned from<br/>$$ min_{a, b}\\sum_i ||x_{S_i} - \\sum_j a_{S_i}^j b_j||^2_2 + \\beta ||a_{S_i}||_1$$<br/>$$s.t. ||b_j||_2 \\le 1 , \\forall j \\in 1, \\dots, s. $$<br/>In the second step, higher level features on the target-domain data will be learned based on the basis vectors $b$:<br/>$$a_{T_i}^* = argmin_{a_{T_i}} ||x_{T_i} - \\sum_j a_{T_i}^j b_j||^2_2 + \\beta||a_{T_i}||_1$$<br/>Transferring Knowledge of Parameters<br/>Most approaches are designed to work under multitask learning. But they can be easily modified for transfer learning. Intuitively, we may assign a larger weight to the loss function of the target domain to achieve better performance in the target domain.<br/>Algorithms: <br/><br/>MT-IVM (Lawrence and Platt)<br/>SVMs for multitask learning (Evgeniou and Pontil)<br/>A locally weighted ensemble learning framework (Gao et al)<br/><br/>Transferring Relational Knowledge<br/>It deals with transfer learning problems in relational domains. It does not assume that the data drawn from each domain be independent and identically distributed (i.i.d.).<br/>Statistical relational learning techniques are proposed to solve these problems.<br/>Algorithms: <br/><br/>TAMAR (Mihalkova et al)<br/><br/>Transductive transfer learning<br/>Transferring the Knowledge of Instances<br/>We want to minimize<br/>$$ \\theta^* = argmin_{\\theta \\in \\Theta} \\sum_{(x, y)\\in D_S} \\frac{P(D_T)}{P(D_S)}P(D_S)l(x,y,\\theta) \\\\<br/>\\approx argmin_{\\theta \\in \\Theta} \\sum_{i=1}^{n_S}\\frac{P_T(x_{T_i}, y_{T_i})}{P_S(x_{S_i}, y_{S_i})} l(x_{S_i}, y_{S_i}, \\theta).$$<br/>and<br/>$$\\frac{P_T(x_{T_i}, y_{T_i})}{P_S(x_{S_i}, y_{S_i})}= \\frac{P(x_{S_i})}{P(x_{T_i})}$$<br/>Algorithms to estimate $\\frac{P(x_{S_i})}{P(x_{T_i})}$:<br/><br/>kernel-mean matching(KMM）<br/>Kullback-Leibler Importance Estimation Procedure(KLIEP)<br/><br/>Transferring Knowledge of Feature Representations<br/>Structural correspondence learning (SCL) algorithm：<br/> 1. Define a set of pivot features from both domains<br/> 2. Remove these pivot features from the data and treats each pivot feature as a new label vector. Solve $m$ classification problem:<br/>$$f_1(x)= sgn(w_l^T \\cdot x), l=1, \\dots, m.$$<br/> 3. Use SVD on matrix $W$: $W = UDV^T$, and $\\theta = U^T_{[1:h,:]}$(h is the number of the shared features)is the matrix (linear mapping) whose rows are the top left singular vectors of W.<br/> 4. Use the augmented feature vector to build models.<br/>Disadvantages: How to select the pivot features is difficult and domain dependent.<br/>MI-SCL: Use Mutual Information (MI) to choose the pivot features instead of using more heuristic criteria.<br/>Other algorithms:<br/><br/>coclustering-based algorithm: propagate the label information across different domains.<br/>bridged refinement<br/>spectral classification framework for cross-domain transfer learning problem<br/>a cross-domain text classification algorithm that extended the traditional prob- abilistic latent semantic analysis (PLSA) algorithm<br/><br/>Transfer learning via dimensionality reduction:<br/>Maximum Mean Discrepancy Embedding(MMDE) can learn a low-dimensional space to reduce the difference of distributions between different domains. Transfer Component Analysis (TCA) overcomes the drawback of computational burden.<br/>Unsupervised Transfer Learning<br/>Little research works on this setting. Self-taught clustering (STC) and transferred discriminative analysis (TDA) algorithms are proposed to transfer clustering and transfer dimensionality reduction problems, respectively.<br/>Transferring Knowledge of Feature Representations<br/>Self-taught clustering is an instance of unsupervised transfer learning, which aims at clustering a small collection of unlabeled data in the target domain with the help of a large amount of unlabeled data in the source domain.<br/>STC: tries to learn a common feature space across domains.<br/>TDA algorithm: solves the transfer dimensionality reduction problem. First applies clustering methods to generate pseudoclass labels for the target unlabeled data, then applies dimensionality reduction methods to the target data and labeled source data to reduce the dimensions. Run iteratively.<br/>Transfer Bounds and Negative Transfer<br/>Conditional Kolmogorov complexity is used to measure relatedness between tasks and transfer the “right” amount of information. <br/>A novel graph-based method is used for knowledge transfer.<br/>How to avoid negative transfer is a very important issue. If two tasks are too dissimilar, then brute-force transfer may hurt the performance.<br/>Applications of Transfer Learning<br/>Datasets:<br/>- text mining data sets<br/>- Email spam-filtering data set<br/>- WiFi localization over time periods data set<br/>- Sentiment classification data set<br/>Toolboxes:<br/>a MATLAB toolkit for transfer learning. http://multitask.cs.berkeley.edu/<br/>Other applications:<br/>In sequential machine learning<br/>Conclusion<br/>This survey reviewed several current trends of transfer learning. Three different settings of Transfer Learning: inductive transfer learning, transductive transfer learning, and unsupervised transfer learning. <br/>Approaches can be classified into four contexts based on “what to transfer” in learning.<br/>Future research issues:<br/>- how to avoid negative transfer<br/>- how to make sure that no negative transfer happens<br/>- when an entire domain cannot be used for transfer learning and whether we can still transfer part of the domain for useful learning in the target domain.<br/>Most transfer learning algorithms assumed that the feature spaces between the source and target domains are the same. However, we may wish to transfer knowledge across domains or tasks that have different feature spaces, and transfer from multiple such source domains. This type is heterogeneous transfer learning.<br/>Use transfer learning to solve other challenging applications.","tags": "Notes","url": "blog/180602/ASoTL.html"},
{"title": "About Today","text": "2013年12月23日，中共中央办公厅印发的《关于培育和践行社会主义核心价值观的意见》中首次提出社会主义核心价值观。<br/>和我一起读：<br/>1<br/>2<br/>3富强！民主！文明！和谐！<br/>自由！平等！公正！法制！<br/>爱国！敬业！诚信！友善！<br/><br/><br/>高举中国特色社会主义伟大旗帜，为中华民族伟大复兴而奋斗！","tags": "Diary","url": "blog/181223/today.html"},
{"title": "Aistudio常规赛-论文引用网络节点分类 比赛记录","text": "背景<br/>大概是在周四上课的时候，听到老师讲了一下有比赛。 当天回去我就连夜fork了baseline代码，跑了一遍。 大概发现和baseline差不多的样子，GCN的性能在0.68左右，GAT还要稍差一些。 当时榜单第一名大概是71.5。<br/>修改模型<br/>结合之前对ResNet的理解，加上阅读了DeeperGCN这篇文章，我对PGL里面实现的DeeperGCN做了一个简单封装，跑了一下。 简单调参以后，提交上去评测以后acc是72.59，印象里比当时的第二名高了一个百分点以上。 我满意地睡觉了。<br/>继续修改模型<br/>周五起来以后，调了调参数发现模型始终就是这个水平。 我觉得可能这个模型的上限也就是这样了，还需要继续改动模型架构。 借鉴Residual Attention Network这篇文章，我实现了一个把残差结构和注意力机制放在一起的网络结构。 这里注意力机制使用了GaAN。 周五下午实现了这个以后，第一次交上去结果就有0.73879。 但是后续不论怎么调参，结果始终没有提升。 周五晚上看到老师魔改了一个ResGAT出来，我感觉和我的差不多，就没有尝试。 （后续听说有同学把这个调到好高好高，羡慕。）<br/>放弃，抱大腿<br/>周六早上再看榜单，发现我已经跌出前三名了。第一名是Paddle Baseline的一个模型。 我当时就想，看来是老师们看菜鸡互啄看不下去了，放了个baseline让我找找差距。 我当时有些绝望，开始找论文读。 想起老师之前讲的，百度自研的Unimp模型，我感觉可以一试。 没想到，把unimp模型运行起来花了我大半天的时间。 不过，在逐步排除错误的时候，对unimp的理解，对paddle框架的理解，以及对图神经网络的理解都有了很大提升。 Unimp模型的结果非常令我惊讶，在验证集上一度达到了0.761+的acc。 不过，交到测试集上的结果只有0.75803 。 后续调参都没有突破。<br/>最后的改动<br/>周天的时候看到大家提交的结果都非常好，也让我感到了很大的压力。 这时候，我看着文件夹里之前的一排submission.csv，突然想到，能不能把它们利用起来呢？ 很快啊，就实现了一个简单的集成学习，使用的是绝对多数投票法。这个方法果然有了很大提升，经过几次尝试之后，acc达到了0.76401。<br/>总结<br/><br/>可能是因为不太会调参，我感觉模型架构上的有效改进意义远大于不停地人肉搜参。但看到很多大佬调baseline模型仍然能拿到很好的成绩，我很惊讶，也希望大佬们能传授一下经验。<br/>后面才注意到比赛用的数据集是ogbn-arixv的子集，而unimp模型也是在ogbn-arixv数据集上刷新了sota的模型。不得不感叹一句，百度PGL团队，强。<br/>最后，再次感谢老师，班主任，助教，各位同学们的指导与陪伴，真的让我学到了很多有用的知识。<br/>有对细节或者其他东西感兴趣的朋友，欢迎讨论。但这个笔记就不要转载啦（写得这么差，应该也不会有人想要转吧）。<br/>","tags": "","url": "blog/201130/today.html"},
{"title": "Home Page","text": "Welcome to lan-qing’s blog site！<br/>Visit my bio page here<br/>最近更新<br/><br/>Added diary for 2018.12.23<br/>Added note A note of A Survey on Transfer Learning<br/>","tags": "Home","url": "index.html"},
{"title": "PPT","text": "<br/>传统机器学习<br/>有监督学习<br/>对率回归<br/>K-最近邻<br/>支持向量机<br/>决策树<br/>多层感知机<br/>贝叶斯分类器<br/>概率图模型 <br/>马尔科夫模型<br/>贝叶斯图模型<br/><br/><br/><br/><br/>无监督学习<br/>聚类<br/>K-均值<br/>高斯混合模型<br/><br/><br/>降维<br/>主成分分析<br/>独立成分分析<br/><br/><br/>特征选择<br/><br/><br/>半监督学习<br/>生成式方法: 期望最大化算法<br/>半监督支持向量机<br/>图半监督学习<br/>基于分歧的方法<br/>半监督聚类<br/><br/><br/>迁移学习<br/>基于样本迁移<br/>基于特征迁移<br/>基于模型迁移<br/>基于关系迁移<br/><br/><br/><br/><br/>","tags": "","url": "blog/190509/ppt.html"},
{"title": "Some thoughts about feature fusion network","text": "Feature fusion neural network I defined before is a network with multiple input features and single output features.<br/>Here I use a two feature fusion network to explain it: $\\mathbf{x}, \\mathbf{z} \\rightarrow^{NN} \\mathbf{y}$.<br/>I list some of questions and my thoughts here:<br/><br/><br/>Why $\\mathbf{x}$ and $\\mathbf{z}$ can be called two features here? Maybe they are taken from different<br/>domains and can be distinguished by humans easily, but is there any quantified criteria to measure<br/>whether they are two different features or just two parts of one features? On the other hand, if we mix them<br/>as one feature $[\\mathbf{x};\\mathbf{z}]$, can it be split as original two features again?<br/>I guess different feature vectors come from different high-dimensional probability distributions.<br/>Moreover, the inner correlation coefficient is larger than outer correlation coefficient.<br/>If this question is answered, it will be feasible to split any features into two parts and fuse them with tensor<br/>methods.<br/><br/><br/>Why tensor-based feature fusion is helpful? If the neural network to make final decision is powerful enough<br/>(can always find the global optimal solution), the feature fusion method will be useless. But the analysis about combining the feature fusion process and the neural network structure is still remained.<br/><br/>","tags": "Notes","url": "blog/190328/today.html"},
{"title": "today","text": "南洋四年为学客，天涯千里任转萍。<br/>少年可知父母心，一思一念总关情！<br/>寒假回家的时候，听到老婶对妹妹说：“自从有了你，妈妈就再也不是为自己活着了。”虽说这话有些绝对，可是从某种程度上来讲，天下的妈妈们啊，又何尝不是这样！也许每个妈妈都有过明快轻灵的少女时光，活得自由自在无忧无虑，可以“蹴罢秋千，起来慵整纤纤手。”但自从有了家庭，成为了妈妈，生活便不得不变得沉郁而又伟大起来。尽管可以说是子女成就了这一份伟大，然而如果可以，又有多少人真的想变得伟大呢？所有的伟大背后，都是付出了不知多少汗水与血泪。为人子女，又怎能不在心中感激！妈妈，节日快乐！","tags": "","url": "blog/190512/today.html"},
{"title": "《On the Expressive Power of Deep Neural Networks》阅读笔记","text": "本文结合个人理解，简要梳理《On the Expressive Power of Deep Neural Networks》的内容。这是一篇Maithra Raghu等人发表在2017年的ICML上的文章，并且在会议上做了近20分钟的展示讲解。<br/>Introduction<br/>论文的题目中有两个关键词：expressive power 和 deep neural network。对expressive power，我们可能会产生的问题有：<br/><br/>什么是expressive power？<br/>为什么要研究expressive power？<br/>如何测量expressive power?<br/>什么决定了网络的expressive power?<br/>研究expressive power对理论上神经网络的结构理解，和实际的生产生活应用带来了什么好处？<br/><br/>本文正是为这些问题提供了解答。<br/>Expressive power<br/>神经网络实际上是在拟合一个从输入到输出的函数。一个确定的神经网络结构$A$对应着一个确定的函数$F_A(x;W)$，其中$x$是输入，$W$是整个<br/>网络中的参数。对于一个仅使用分段线性激活函数（如：ReLU和hard tanh）的神经网络而言，无论最后拟合出的函数有多么复杂，也一定是一个分段线性函数。更精确地，<br/>有定理：<br/><br/>Theorem 2. Regions in Input Space. Given the corresponding function<br/>of a neural network $F_A(\\mathbb{R}^m;W)$ with ReLU or hard tanh activations,<br/> the input space is partitioned into convex polytopes,<br/> with $F_A(\\mathbb{R}^m;W)$ corresponding to a different linear function on each region.<br/>定理 2. 输入空间区域定理. 一个仅使用ReLU和hard tanh激活函数的神经网络$F_A(\\mathbb{R}^m;W)$，会将<br/>输入空间分割成多个凸的多面体。在每一个多面体上，$F_A(\\mathbb{R}^m;W)$都对应于一个不同的线性函数。<br/><br/>因此，从神经网络的整体结果来看，一个很自然的expressive power的度量就是在某个输入空间上分段线性函数的线性区间的数量。为方便表示说明，这里将输入空间限制为一条一维的路径。<br/> <br/>定义输入空间中的一维路径如下：<br/><br/>Definition. Given two points, $x_0, x_1 \\in \\mathbb{R}^m$, we say $x(t)$ is a trajectory (between $x_0$ and $x_1$<br/>) if $x(t)$ is a curve parametrized by a scalar $t \\in [0, 1]$, with $x(0) = x_0$ and $x(1) = x_1$.<br/>定义. 对空间中的两个点 $x_0, x_1 \\in \\mathbb{R}^m$, 定义$x(t)$为$x_0$ 和 $x_1$ 之间的路径，其中$t \\in [0,1]$ 为参数，满足<br/>$x(0) = x_0$ 且 $x(1) = x_1$.<br/><br/>Montufar 等人的论文中证明了，在同样的参数数量限制下，一个多层全连接网络一定会比一个单层神经网络有更多的线性区间。 本文在这篇论文的基础上，进一步提出使用每一个神经元的可能的激活状态的组合的数目（以下简称：激活状态组合数）来表示网络的expressive power。以relu神经元为例，如图所示，在输入不同的情况下，神经元的激活状态是不同的。 <br/> <br/>具体定义如下：<br/><br/>Define $\\mathcal{AP}(F_A(x;W))$ to be the activation pattern – a string of form $\\{0, 1\\}^\\text{num neurons}$ (for ReLUs) and $\\{-1, 0, 1\\}^\\text{num neurons}$ (for hard tanh) of the network encoding the linear region of the activation function of every neuron, for an input $x$ and weights $W$. <br/>Define \\mathcal{A}(F_A(x(t);W)) as the number of distinct $\\mathcal{AP}(F_A(x;W))$ as we sweep $x$ along $x(t)$.<br/><br/>很自然的问题是：激活状态组合数受到哪些参数的影响？定理1指出，对ReLU神经网络，激活状态组合数的上界为$O(k^{mn})$；对hard tanh网络则为$O((2k)^{mn})$，其中n是网络层数，k是网络宽度，m是输入空间维度。 作者在附录中给出了一页半的证明过程。<br/><br/>Theorem 1. (Tight) Upper Bound for Number of Activation Patterns Let $A_{(n,k)}$ denote a fully connected network with $n$ hidden layers of width $k$, and inputs in $\\mathbb{R}^m$. Then the number of activation patterns $\\mathcal{A}(F_{A_{n,k}}(\\mathbb{R}^m;W)$ is upper bounded by $O(k^{mn})$ for ReLU activations, and $O((2k)^{mn})$ for hard tanh.<br/><br/>作者在MNIST数据集上验证了这一定理，结果如下图。实验显示，transitions number 随网络深度的增加成指数增加，而随网络宽度的增加在对数坐标轴上并不明显。<br/><br/>根据定理1我们可以回答以下问题：当总神经元个数（kn）一定时，如何安排能达到最大的激活状态组合数？经过代入公式求导计算，解得$k=e$为最大值。所以当$k>e$时，网络的expressive power随着每层神经元个数的增加而减小。","tags": "Notes","url": "blog/190326/today.html"},
{"title": "关于","text": "关于<br/><br/>从riteme那里复制来的博客<br/>","tags": "About","url": "about.html"},
{"title": "博客主页","text": "欢迎来到我的博客！<br/>我的介绍页面<br/>最近更新<br/><br/>添加了一个笔记 Aistudio常规赛-论文引用网络节点分类 比赛记录<br/>","tags": "Home","url": "index.html"},
{"title": "所有文章","text": "2020-11<br/><br/>Aistudio常规赛-论文引用网络节点分类 比赛记录 - 2020.11.30<br/><br/>2018-12<br/><br/>Diary - 2018.12.23<br/><br/>2018-6<br/><br/>A note of A Survey on Transfer Learning<br/>","tags": "Posts","url": "posts.html"}]};