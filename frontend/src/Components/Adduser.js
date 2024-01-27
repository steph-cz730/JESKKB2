import { useState } from 'react'
import axios from 'axios'

function AddHeroForm(){
    const [newSubscriber, setNewSubscriber] = useState({
        userName: '',
        subject: '',
        favoritePlanet: '',
        astronomyFan: '',
        weeklyFacts: ''
    })
    function handleChange(e){
        console.log('change event')
        const{userName, value} = e.target
        setNewSubscriber({...newSubscriber, [userName]: value})
    }
    async function handleSubmit(e){
        e.preventDefault()
        console.log('Form Submitted')
        try{
            const response = await axios.post('http://localhost:3000/heros', newHero)
            console.log(response.json)
            location.reload()
        }catch (error){
            console.error('Error Sending POST Request: ', error)
        }
    }
    function openForm(){
        UIkit.modal('#subscriber-modal').show()
    }
    function resetForm(){
        setNewUser({
            userName: '',
            subject: '',
            favoritePlanet: '',
            astronomyFan: '',
            weeklyFacts: ''
        })
    }
    return(
        <div id= 'userForm'>
            <button className= 'uk-button uk-button-primary' onClick={openForm}>Add Subscriber</button>
            <div id= 'subscriber-modal' uk-modal='true' container='#subscriberForm'>
                <div className='uk-modal-dialog uk-modal-body'>
                    <form className= 'uk-form-stacked' onSubmit={handleSubmit}>
                        <button className= 'uk-modal-close-default' type= "button" uk-close='true'></button>
                        <h2>Add New Subscriber</h2>
                        <div className = 'uk-margin'>
                            <label className='uk-form-label'>User Name</label>
                            <input className='uk-form-controls' type='text' name='userName' value={newSubscriber.userNameName}onChange={handleChange}/>
                            <label className='uk-form-label'>Favorite Subject</label>
                            <input className='uk-form-controls' type='text' name='Favorite Subject' value={newSubscriber.subject}onChange={handleChange}/>
                            <label className='uk-form-label'>Favorite Planet</label>
                            <input className='uk-form-controls' type='text' name='Favorite Planet' value={newSubscriber.favoritePlanet}onChange={handleChange}/>
                        </div>
                        <div className='uk-margin'>
                        <label className='uk-form-label'>Birth Date</label>
                        <input className='uk-form-controls' type='boolean' name='astronomyFan' value={newSubscriber.astronomyFan}onChange={handleChange}/>
                        <label className='uk-form-label'>Organization</label>
                        <input className='uk-form-controls' type='boolean' name='weeklyFacts' value={newSubscriber.weeklyFacts}onChange={handleChange}/>
                        </div>
                        <p className= 'uk-text-right'>
                            <input className='uk-button uk-button-primary' type='submit' value='Save'/>
                            <button className='uk-button uk-button-danger' type='reset' onClick={resetForm}>Reset</button>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AddSubscriberForm