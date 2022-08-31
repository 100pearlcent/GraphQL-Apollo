import './components.css';
import { useState } from 'react';
import { useQuery, useMutation, gql } from '@apollo/client' 

function Teams() {

  const [contentId, setContentId] = useState(0)
  const [inputs, setInputs] = useState({
    manager: '',
    office: '',
    extension_number: '',
    mascot: '',
    cleaning_duty: '',
    project: ''
  })

    function AsideItems () {
        return (<div></div>);
    }

    function MainContents () {
        return (<div></div>);
    }

    return (
        <div id="teams" className="component">
            <aside>
                {AsideItems()}
            </aside>
            <section className="contents">
                {MainContents()}
            </section>
        </div>
    )
}

export default Teams;