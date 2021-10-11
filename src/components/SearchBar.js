import React from 'react';

//functional component
const SearchBar = ({ onFormSubmit }) => {
    const [term,setTerm] = useState('');
    const onSubmit = event => {
        event.preventDefault();

        //make sure we call  callback from parent component
        onFormSubmit(term);  //so the parent component know what is term

    };

    return(
            <div className = "searcj-bar ui segment" >
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                    <input type="text"
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                    />
                </div>
            </form>
            </div >
        );

}
export default SearchBar;