var tipuesearch = {"pages": [{"title": "A note of A Survey on Transfer Learning","text": "A note of A Survey on Transfer Learning<br/>Introduction<br/>Applied range<br/>knowledge transfer  or transfer learning would be desirable when it is expensive or impossible to recollect the needed training data and rebuild the models.<br/>Examples<br/><br/><br/>Web-document classification<br/>To classify a given Web document into several predefined categories. <br/>For example, the labeled examples may be the university webpages. But the newly created website may have different data features or data distributions. <br/><br/><br/>Data which outdate easily <br/>Example: indoor WiFi localization problems. We wish to adapt the localization model trained in one time period (the source domain) for a new time period (the target domain), or to adapt the localization model trained on a mobile device (the source domain) for a new mobile device (the target domain)<br/><br/><br/>The problem of sentiment classification<br/>To adapt a classification model that is trained on some products to help learn classification models for some other products<br/><br/><br/>Overview<br/>Brief History<br/>History<br/><br/><br/>Traditional machine learning algorithms: make predictions on the future data using statistical models that are trained on previously collected training data<br/><br/><br/>Semisupervised classification: much unlabeled data, little labeled data. Assume they are the same.<br/><br/><br/>Transfer Learning<br/><br/><br/>Motivation: People can intelligently apply knowledge learned previously to solve new problems<br/><br/><br/>Fundamental motivation: A NIPS-95 workshop on “Learning to Learn”<br/><br/><br/>Different names: learning to learn, life-long learning, knowledge transfer, inductive transfer, multitask learning, knowledge consolidation, context-sensitive learning, knowledge-based inductive bias, metalearning, and incremental/cumulative learning<br/><br/><br/>New definition: the ability of a system to recognize and apply knowledge and skills learned in previous tasks to novel tasks.<br/><br/>Difference between transfer learning and mutitask learning: transfer learning cares most about the target task, while multitask learning learning all of the source and target tasks simultaneously<br/><br/><br/><br/>Top venues: <br/><br/>data mining: ACM KDD, IEEE ICDM, and PKDD, for example<br/>machine learning: ICML, NIPS, ECML, AAAI, and IJCAI, for example<br/>applications of machine learning and data mining: ACM SIGIR, WWW, and ACL, for example<br/><br/><br/><br/>Notations and Definitions<br/>Definitions of “Domain” and “Task”<br/>A domain $D$ consists of two components: a feature space $\\mathcal{X}$ and a marginal probability distribution $P(X)$, where $X = \\{x_1, \\dots, x_n\\} \\in \\mathcal{X}$.<br/>A task consists of two components: a label space $\\mathcal{Y}$ and an objective predictive function $f(\\cdot)$.<br/>This survey only consider one source domain $\\mathcal{D}_S$, one target domain $\\mathcal{D}_T$ and usually $0 \\le N_T \\ll N_S$.<br/>Unified definition<br/>Transfer Learning: Given a source domain $\\mathcal{D}_S$ and learning task $\\mathcal{T}_S$, a target domain $\\mathcal{D}_T$ and learning task $\\mathcal{T}_T$, transfer learning aims to help improve the learning of the target predictive function $f_T(\\cdot)$ in $\\mathcal{D}_T$ using the knowledge in $\\mathcal{D}_S$ and $\\mathcal{T}_S$,where $\\mathcal{D}_S \\neq \\mathcal{D}_T$, or $\\mathcal{T}_S \\neq \\mathcal{T}_T$.<br/>A Categorization of Transfer Learning Techniques<br/>Three main research issues:<br/><br/>what to transfer<br/>how to transfer<br/>when to transfer<br/><br/>Three subsettings:<br/><br/>inductive transfer learning<br/>transductive transfer learning<br/>unsupervised transfer learning<br/><br/>inductive transfer learning<br/>The target task is different from the source task, no matter when the source and target domains are the same or not.<br/>Two cases:<br/>1. A lot of labeled data in the source domain are available.<br/>2. No labeled data in the source domain are available.<br/>transductive transfer learning<br/>The source and target tasks are the same, while the source and target domains are different.<br/>Two cases:<br/>1. $\\mathcal{X}_S \\neq \\mathcal{X}_T$.<br/>2. $\\mathcal{X}_S = \\mathcal{X}_T$ but $P(X_S) \\neq P(X_T)$.<br/>unsupervised transfer learning<br/>no labeled data available in both source and target domains in training.<br/>Inductive transfer learning<br/>Inductive transfer learning: Given a source domain $\\mathcal{D}_S$ and a learning task $\\mathcal{T}_S$, a target domain $\\mathcal{D}_T$ and a learning task $\\mathcal{T}_T$, inductive transfer learning aims to help improve the learning of the target predictive function $f_T(\\cdot)$ in $\\mathcal{D}_T$ using the knowledge in $\\mathcal{D}_S$ and $\\mathcal{T}_S$ where $\\mathcal{T}_S \\neq \\mathcal{T}_T$.<br/>Transferring Knowledge of Instances<br/>a boosting algorithm: TrAdaBoost<br/>Transferring Knowledge of Feature Representations<br/>Aims at finding “good” feature representations to minimize domain divergence and classi- fication or regression model error. <br/>Similar to common feature learning in the field of multitask learning<br/>Supervised Feature Construction<br/>In the inductive transfer learning setting, the common features can be learned by solving an optimization problem, given as follows:<br/>$$ argmin_{A, U} \\sum_{t \\in \\{T, S\\}} \\sum_{i=1}^{n_t} L(y_{t_i}, \\langle a_t, U^T x_{t_i}\\rangle) + \\gamma ||A||^2_{2, 1}$$ <br/>$$s.t. U \\in \\mathbf{O}^d .$$<br/>Unsupervised Feature Construction<br/>Sparse coding is an unsupervised feature construction method for learning higher level features for transfer learning. It consists of two steps.<br/>In the first step, higher level basis vectors $b = \\{b_1, b_2, \\dots, b_s\\}$ are learned from<br/>$$ min_{a, b}\\sum_i ||x_{S_i} - \\sum_j a_{S_i}^j b_j||^2_2 + \\beta ||a_{S_i}||_1$$<br/>$$s.t. ||b_j||_2 \\le 1 , \\forall j \\in 1, \\dots, s. $$<br/>In the second step, higher level features on the target-domain data will be learned based on the basis vectors $b$:<br/>$$a_{T_i}^* = argmin_{a_{T_i}} ||x_{T_i} - \\sum_j a_{T_i}^j b_j||^2_2 + \\beta||a_{T_i}||_1$$<br/>Transferring Knowledge of Parameters<br/>Most approaches are designed to work under multitask learning. But they can be easily modified for transfer learning. Intuitively, we may assign a larger weight to the loss function of the target domain to achieve better performance in the target domain.<br/>Algorithms: <br/><br/>MT-IVM (Lawrence and Platt)<br/>SVMs for multitask learning (Evgeniou and Pontil)<br/>A locally weighted ensemble learning framework (Gao et al)<br/><br/>Transferring Relational Knowledge<br/>It deals with transfer learning problems in relational domains. It does not assume that the data drawn from each domain be independent and identically distributed (i.i.d.).<br/>Statistical relational learning techniques are proposed to solve these problems.<br/>Algorithms: <br/><br/>TAMAR (Mihalkova et al)<br/><br/>Transductive transfer learning<br/>Transferring the Knowledge of Instances<br/>We want to minimize<br/>$$ \\theta^* = argmin_{\\theta \\in \\Theta} \\sum_{(x, y)\\in D_S} \\frac{P(D_T)}{P(D_S)}P(D_S)l(x,y,\\theta) \\\\<br/>\\approx argmin_{\\theta \\in \\Theta} \\sum_{i=1}^{n_S}\\frac{P_T(x_{T_i}, y_{T_i})}{P_S(x_{S_i}, y_{S_i})} l(x_{S_i}, y_{S_i}, \\theta).$$<br/>and<br/>$$\\frac{P_T(x_{T_i}, y_{T_i})}{P_S(x_{S_i}, y_{S_i})}= \\frac{P(x_{S_i})}{P(x_{T_i})}$$<br/>Algorithms to estimate $\\frac{P(x_{S_i})}{P(x_{T_i})}$:<br/><br/>kernel-mean matching(KMM）<br/>Kullback-Leibler Importance Estimation Procedure(KLIEP)<br/><br/>Transferring Knowledge of Feature Representations<br/>Structural correspondence learning (SCL) algorithm：<br/> 1. Define a set of pivot features from both domains<br/> 2. Remove these pivot features from the data and treats each pivot feature as a new label vector. Solve $m$ classification problem:<br/>$$f_1(x)= sgn(w_l^T \\cdot x), l=1, \\dots, m.$$<br/> 3. Use SVD on matrix $W$: $W = UDV^T$, and $\\theta = U^T_{[1:h,:]}$(h is the number of the shared features)is the matrix (linear mapping) whose rows are the top left singular vectors of W.<br/> 4. Use the augmented feature vector to build models.<br/>Disadvantages: How to select the pivot features is difficult and domain dependent.<br/>MI-SCL: Use Mutual Information (MI) to choose the pivot features instead of using more heuristic criteria.<br/>Other algorithms:<br/><br/>coclustering-based algorithm: propagate the label information across different domains.<br/>bridged refinement<br/>spectral classification framework for cross-domain transfer learning problem<br/>a cross-domain text classification algorithm that extended the traditional prob- abilistic latent semantic analysis (PLSA) algorithm<br/><br/>Transfer learning via dimensionality reduction:<br/>Maximum Mean Discrepancy Embedding(MMDE) can learn a low-dimensional space to reduce the difference of distributions between different domains. Transfer Component Analysis (TCA) overcomes the drawback of computational burden.<br/>Unsupervised Transfer Learning<br/>Little research works on this setting. Self-taught clustering (STC) and transferred discriminative analysis (TDA) algorithms are proposed to transfer clustering and transfer dimensionality reduction problems, respectively.<br/>Transferring Knowledge of Feature Representations<br/>Self-taught clustering is an instance of unsupervised transfer learning, which aims at clustering a small collection of unlabeled data in the target domain with the help of a large amount of unlabeled data in the source domain.<br/>STC: tries to learn a common feature space across domains.<br/>TDA algorithm: solves the transfer dimensionality reduction problem. First applies clustering methods to generate pseudoclass labels for the target unlabeled data, then applies dimensionality reduction methods to the target data and labeled source data to reduce the dimensions. Run iteratively.<br/>Transfer Bounds and Negative Transfer<br/>Conditional Kolmogorov complexity is used to measure relatedness between tasks and transfer the “right” amount of information. <br/>A novel graph-based method is used for knowledge transfer.<br/>How to avoid negative transfer is a very important issue. If two tasks are too dissimilar, then brute-force transfer may hurt the performance.<br/>Applications of Transfer Learning<br/>Datasets:<br/>- text mining data sets<br/>- Email spam-filtering data set<br/>- WiFi localization over time periods data set<br/>- Sentiment classification data set<br/>Toolboxes:<br/>a MATLAB toolkit for transfer learning. http://multitask.cs.berkeley.edu/<br/>Other applications:<br/>In sequential machine learning<br/>Conclusion<br/>This survey reviewed several current trends of transfer learning. Three different settings of Transfer Learning: inductive transfer learning, transductive transfer learning, and unsupervised transfer learning. <br/>Approaches can be classified into four contexts based on “what to transfer” in learning.<br/>Future research issues:<br/>- how to avoid negative transfer<br/>- how to make sure that no negative transfer happens<br/>- when an entire domain cannot be used for transfer learning and whether we can still transfer part of the domain for useful learning in the target domain.<br/>Most transfer learning algorithms assumed that the feature spaces between the source and target domains are the same. However, we may wish to transfer knowledge across domains or tasks that have different feature spaces, and transfer from multiple such source domains. This type is heterogeneous transfer learning.<br/>Use transfer learning to solve other challenging applications.","tags": "Notes","url": "blog/180602/ASoTL.html"},
{"title": "About Today","text": "2013年12月23日，中共中央办公厅印发的《关于培育和践行社会主义核心价值观的意见》中首次提出社会主义核心价值观。<br/>和我一起读：<br/>1<br/>2<br/>3富强！民主！文明！和谐！<br/>自由！平等！公正！法制！<br/>爱国！敬业！诚信！友善！<br/><br/><br/>高举中国特色社会主义伟大旗帜，为中华民族伟大复兴而奋斗！","tags": "Diary","url": "blog/181223/today.html"},
{"title": "Home Page","text": "Welcome to lan-qing’s blog site！<br/>Visit my bio page here<br/>最近更新<br/><br/>Added diary for 2018.12.23<br/>Added note A note of A Survey on Transfer Learning<br/>","tags": "Home","url": "index.html"},
{"title": "Some thoughts about feature fusion network","text": "Feature fusion neural network I defined before is a network with multiple input features and single output features.<br/>Here I use a two feature fusion network to explain it: $\\mathbf{x}, \\mathbf{z} \\xrightarrow^{Neural Network} \\mathbf{y}$.<br/>I list some of questions and my thoughts here:<br/><br/>Why $\\mathbf{x}$ and $\\mathbf{y}$ can be called two features here? Maybe they are taken from different<br/>domains and can be distinguished by humans easily, but is there any quantified criteria to measure<br/>whether they are two different features or just two parts of one features? On the other hand, if we mix them<br/>as one feature $\\[x;z\\]$, can they be separated as two features again?<br/>","tags": "Notes","url": "blog/190328/today.html"},
{"title": "关于","text": "关于<br/><br/>从riteme那里复制来的博客<br/>","tags": "About","url": "about.html"},
{"title": "博客主页","text": "欢迎来到我的博客！<br/>我的介绍页面<br/>最近更新<br/><br/>添加了一篇日记 2018.12.23<br/>添加了阅读笔记 A note of A Survey on Transfer Learning<br/>","tags": "Home","url": "index.html"},
{"title": "所有文章","text": "2018-12<br/><br/>Diary - 2018.12.23<br/><br/>2018-6<br/><br/>A note of A Survey on Transfer Learning<br/>","tags": "Posts","url": "posts.html"}]};