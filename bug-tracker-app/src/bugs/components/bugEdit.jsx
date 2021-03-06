import { useState } from 'react';

const BugEdit = ({addNew, projects}) => {
    const [newBugName, setNewBugName] = useState('');
    return (
        <section>
            <label htmlFor="">Bug Name:</label>
            <input type="text" onChange={evt => setNewBugName(evt.target.value)} />
            <label htmlFor="">Project :</label>
            <select name="" id="">
                { projects.map(project => (<option key={project.id} value={project.id}>{project.name}</option>)) }
            </select> 
            <input type="button" value="Add New" onClick={() => addNew(newBugName)} />
        </section>
    )
}

export default BugEdit;