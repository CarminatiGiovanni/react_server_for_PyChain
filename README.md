# REACT SERVER FOR <b style="color:blue">Py</b><b style="color:yellow">Chain</b>

This server is provides a client interface to interract with the *PyChain* and a easy *ledger* for the transactions.
It also permit to create *new transactions* and verify the transactions in the *blockchain pool*

## PyChain ARCHITECTURE

following a schema of the system:

<div style="background-color:white;display:flex; justify-content:center;align-items:center;width:100%;">
    <img src="docs/Diagram%20client-server-blockchain.svg" alt="system architecture"/>
</div>
<br/>

1. The cloud is the **decentralized** <b style="color:blue">Py</b><b style="color:yellow">Chain</b>, each *raspberry* contains a copy of the same *blockchain* and share with the other *nodes* the transactions.
More about [**PyChain** here](https://github.com/HeyJOe03/PyChain)

2. this repository contains the code of the react server, this is between the client and the Pychain and provides a connection between them. The *ReactServer* requires information to *PyChain* using *HTTP protocol* and generates the client interface.
The tecnologies chosen for the server are: 
 - [React](https://it.reactjs.org/): for the **dinamic** user-interface
 - [Typescript](https://www.typescriptlang.org/): used instead of the common *js*
 - [SCSS](https://sass-lang.com/): used to generate the *CSS* for styling the components
 - [React-Bootstrap](https://react-bootstrap.github.io/): a very userfull framework for the style

3. The client (using the browser) connects to the react server that generates the page. Then the client could make requests to the blockchain such as retrieve all the transaction or submit a new one. More about that in the workflow section

## SYSTEM WORKFLOW

following the schema of the workflow from connection to the request of a new *transaction*
<div style="background-color:white;display:flex; justify-content:center;align-items:center;width:100%;">
    <img src="docs/Diagram%20workflow.drawio.svg" alt="system architecture"/>
</div>
<br/>

