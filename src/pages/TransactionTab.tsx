import { useContext } from "react"
import { Container, CardGroup } from "react-bootstrap"
import { BlockchainContext } from "../App"
import { BlockInterface, TransactionInterface } from "../classes"
import Transaction from "../components/Transaction"

const TransactionTab = () => {
    const {blockchain} = useContext(BlockchainContext)
    return (
        <>
            {   
                blockchain?.blockchain.map((b: BlockInterface) => {
                    return(
                            <CardGroup>
                                {
                                    b.transactions.map((t: TransactionInterface,index) => {
                                        return (
                                            <Transaction key={b.hash + '_' + index.toString()} transaction={t} />
                                        )
                                    })
                                }
                            </CardGroup>
                    )
                })
            }
        </>
    )
}

export default TransactionTab