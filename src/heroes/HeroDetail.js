import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router';

import { ButtonFooter, InputDetail } from '../components';

function HeroDetail({ hero: initHero, handleCancelHero, handleSaveHero, history }) {
  const [ hero, setHero ] = useState(Object.assign({}, initHero));

  useEffect(() => {
    if (!hero) {
      history.push('/'); // no hero, bail out of Details
    }
  }, [ hero, history ])


  function handleSave() {
    const chgHero = {...hero, id: hero.id || null };
    handleSaveHero(chgHero);
  };

  function handleNameChange(e) {
    setHero({ ...hero,  name: e.target.value });
  };

  function handleDescriptionChange(e) {
    setHero({ ...hero, description: e.target.value });
  };

  //#region render
  return (
    <div className="card edit-detail">
      <header className="card-header">
        <p className="card-header-title">
          {hero.name}
          &nbsp;
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          {hero.id && (
            <InputDetail name="id" value={hero.id} readOnly="true" />
          )}
          <InputDetail
            name="name"
            value={hero.name}
            placeholder="e.g Colleen"
            onChange={handleNameChange}
          />
          <InputDetail
            name="description"
            value={hero.description}
            placeholder="e.g dance fight!"
            onChange={handleDescriptionChange}
          />
        </div>
      </div>
      <footer className="card-footer ">
        <ButtonFooter
          className="cancel-button"
          iconClasses="fas fa-undo"
          onClick={handleCancelHero}
          label="Cancel"
        />
        <ButtonFooter
          className="save-button"
          iconClasses="fas fa-save"
          onClick={handleSave}
          label="Save"
        />
      </footer>
    </div>
  );
  //#endregion render
}

export default withRouter(HeroDetail);

//#region old HeroDetail class

//import React, { Component } from 'react'; // move to top

// class HeroDetailOld extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hero: Object.assign({}, this.props.hero)
//     };
//   }

//   componentDidMount() {
//     !this.props.hero && this.props.history.push('/');
//   }

//   handleSave = () => {
//     const hero = {
//       id: this.state.hero.id || null,
//       name: this.state.hero.name,
//       description: this.state.hero.description
//     };
//     this.props.handleSaveHero(hero);
//   };

//   handleNameChange = e => {
//     let hero = Object.assign({}, this.state.hero, { name: e.target.value });
//     this.setState({ hero });
//   };

//   handleDescriptionChange = e => {
//     let hero = Object.assign({}, this.state.hero, {
//       description: e.target.value
//     });
//     this.setState({ hero });
//   };

//   render() {
//     let { hero } = this.state;
//     let { handleCancelHero } = this.props;

//     return (
//       <div className="card edit-detail">
//         <header className="card-header">
//           <p className="card-header-title">
//             {hero.name}
//             &nbsp;
//           </p>
//         </header>
//         <div className="card-content">
//           <div className="content">
//             {hero.id && (
//               <InputDetail name="id" value={hero.id} readOnly="true" />
//             )}
//             <InputDetail
//               name="name"
//               value={hero.name}
//               placeholder="e.g Colleen"
//               onChange={this.handleNameChange}
//             />
//             <InputDetail
//               name="description"
//               value={hero.description}
//               placeholder="e.g dance fight!"
//               onChange={this.handleDescriptionChange}
//             />
//           </div>
//         </div>
//         <footer className="card-footer ">
//           <ButtonFooter
//             className="cancel-button"
//             iconClasses="fas fa-undo"
//             onClick={handleCancelHero}
//             label="Cancel"
//           />
//           <ButtonFooter
//             className="save-button"
//             iconClasses="fas fa-save"
//             onClick={this.handleSave}
//             label="Save"
//           />
//         </footer>
//       </div>
//     );
//   }
// }
//#endregion old HeroDetail class
