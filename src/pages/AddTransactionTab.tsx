import {Form, Button, DropdownButton, Dropdown} from 'react-bootstrap'
import { useContext, useState } from 'react'
import { BlockchainContext } from '../App'
import './../style/css/add_transaction.css'

interface AddRequestInterface {
    content_type: 'image' | 'text' | undefined,
    author: string,
    title: string,
    value: string,
    description: string
}


const AddTransaction = () => {
    const {blockchain} = useContext(BlockchainContext)
    const [content_type,setContentType] = useState<string>('Content Type')
    const [request,setRequest] = useState<AddRequestInterface>({
        content_type: undefined,
        author: '',
        title: '',
        value: '',
        description: ''
    })

    const formvalue = (ctype: string) => {
        switch(ctype){
            case 'image':
                return(
                    <Form.Control type="file" name="value" onChange={handleChange}/>
                )
            case 'text':
                return(
                    <Form.Control type="text" as="textarea" name="value" placeholder="Enter text" onChange={handleChange}/>
                )
            default:
                return (<></>)
        }
    }

    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(!blockchain) return
        fetch(blockchain.address + '/add_transaction',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(request)
        }).then(r => r.json()).then(json => alert(JSON.stringify(json))).catch(e => console.log(e.message))
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        switch(e.target.name){
            case 'author':
                setRequest({...request,author: e.target.value})
                break
            case 'title':
                setRequest({...request,title: e.target.value})
                break
            case 'description':
                setRequest({...request,description: e.target.value})
                break
            case 'value':
                if (content_type === 'image'){
                    let files = e.target.files;
                    if(!files) return
                    let fileReader = new FileReader();
                    fileReader.readAsDataURL(files[0]);
            
                    fileReader.onload = (event) => {
                        if(!(event.target)) return
                        if(!event.target.result)return
                        setRequest({...request,value: event.target.result.toString(),  content_type: 'image'})
                    }
                } else if (content_type === 'text') setRequest({...request,value: e.target.value, content_type: 'text'})
                break
            default:
                break
        }
    }

    return (
        <Form onSubmit={e => onSubmitHandler(e)} className='add_transaction_form'>
            <Form.Group className="mb-3">
                <Form.Label>Author</Form.Label>
                <Form.Control name='author' type="text" placeholder="Enter author name" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>title</Form.Label>
                <Form.Control name="title" type="text" placeholder="Enter title" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Control name='description' type="text" as="textarea" placeholder="Enter description" onChange={handleChange}/>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check inline label="image" name="group1" type='radio' id='inline-radio-1' onClick={() => {setContentType('image')}}/>
                <Form.Check inline label="text"  name="group1" type='radio' id='inline-radio-2' onClick={() => {setContentType('text')}}/>
            </Form.Group>

            <Form.Group className="mb-3">
                {formvalue(content_type)}
            </Form.Group>

            <Button variant="primary" type="submit">
                Send Transaction to {blockchain?.address}
            </Button>
        </Form>
    )
}


export default AddTransaction