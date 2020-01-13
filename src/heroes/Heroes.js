import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { ListHeader, ModalYesNo } from '../components';
import HeroDetail from './HeroDetail';
import HeroList from './HeroList';
import useHeroes from './useHeroes';

const captains = console;

function Heroes({history}) {

  const [ heroToDelete, setHeroToDelete ] = useState(null);
  const [ showModal, setShowModal ] = useState(false);
  const { addHero, deleteHero, getHeroes, heroes, selectHero, selectedHero, updateHero } = useHeroes();

  useEffect(() => {
    getHeroes();
  }, [ getHeroes ]);

  function addNewHero () {
    selectHero({});
    history.push('/heroes/0');
  };

  function handleCancelHero () {
    history.push('/');
    selectHero(null);
    setHeroToDelete(null);
  };

  function handleDeleteHero(hero) {
    selectHero(null);
    setHeroToDelete(hero);
    setShowModal(true);
  };

  function handleSaveHero(hero) {
    if (selectedHero && selectedHero.name) {
      captains.log(hero);
      updateHero(hero);
    } else {
      addHero(hero);
    }
    handleCancelHero();
  };

  function handleCloseModal() { setShowModal(false); }

  function handleDeleteFromModal() {
    setShowModal(false);
    deleteHero(heroToDelete);
    handleCancelHero();
  };

  function handleSelectHero (selectedHero) {
    selectHero(selectedHero);
    captains.log(`you selected ${selectedHero.name}`);
  };

  function handleRefresh () {
    handleCancelHero();
    getHeroes();
  };

  //#region render
  return (
    <div className="content-container">
      <ListHeader
        title="Heroes"
        handleAdd={addNewHero}
        handleRefresh={handleRefresh}
        routePath="/heroes"
      />
      <div className="columns is-multiline is-variable">
        <div className="column is-8">
          <Switch>
            <Route
              exact
              path="/heroes"
              component={() => (
                <HeroList
                  heroes={heroes}
                  selectedHero={selectedHero}
                  handleSelectHero={handleSelectHero}
                  handleDeleteHero={handleDeleteHero}
                />
              )}
            />
            <Route
              exact
              path="/heroes/:id"
              component={() => {
                return (
                  <HeroDetail
                    hero={selectedHero}
                    handleCancelHero={handleCancelHero}
                    handleSaveHero={handleSaveHero}
                    key={selectedHero && selectedHero.id}
                  />
                );
              }}
            />
          </Switch>
        </div>
      </div>

      {showModal && (
        <ModalYesNo
          message={`Would you like to delete ${heroToDelete.name}?`}
          onNo={handleCloseModal}
          onYes={handleDeleteFromModal}
        />
      )}
    </div>
  );
  //#endregion render
}

export default Heroes;

//#region old Heroes class and connect
// To restore, move these imports to the top
// import React, { Component } from 'react';
// import { connect } from 'react-redux';


// class HeroesOld extends Component {
//   state = {
//     heroToDelete: null,
//     showModal: false
//   };

//   componentDidMount() {
//     this.props.getHeroes();
//   }

//   addHero = () => {
//     this.props.selectHero({});
//     this.props.history.push('/heroes/0');
//   };

//   handleCancelHero = () => {
//     this.props.history.push('/');
//     this.props.selectHero(null);
//     this.setState({ heroToDelete: null });
//   };

//   handleDeleteHero = hero => {
//     this.props.selectHero(null);
//     this.setState({ showModal: true, heroToDelete: hero });
//   };

//   handleSaveHero = hero => {
//     const { addHero, selectedHero, updateHero } = this.props;
//     if (selectedHero && selectedHero.name) {
//       captains.log(hero);
//       updateHero(hero);
//       this.handleCancelHero();
//     } else {
//       addHero(hero);
//       this.handleCancelHero();
//     }
//   };

//   handleCloseModal = () => {
//     this.setState({ showModal: false });
//   };

//   handleDeleteFromModal = () => {
//     const { deleteHero } = this.props;
//     this.setState({ showModal: false });
//     deleteHero(this.state.heroToDelete);
//     this.handleCancelHero();
//   };

//   handleSelectHero = selectedHero => {
//     this.props.selectHero(selectedHero);
//     captains.log(`you selected ${selectedHero.name}`);
//   };

//   handleRefresh = () => {
//     this.handleCancelHero();
//     this.props.getHeroes();
//   };

//   render() {
//     const { heroToDelete, showModal } = this.state;
//     const { heroes, selectedHero } = this.props;

//     return (
//       <div className="content-container">
//         <ListHeader
//           title="Heroes"
//           handleAdd={this.addHero}
//           handleRefresh={this.handleRefresh}
//           routePath="/heroes"
//         />
//         <div className="columns is-multiline is-variable">
//           <div className="column is-8">
//             <Switch>
//               <Route
//                 exact
//                 path="/heroes"
//                 component={() => (
//                   <HeroList
//                     heroes={heroes}
//                     selectedHero={selectedHero}
//                     handleSelectHero={this.handleSelectHero}
//                     handleDeleteHero={this.handleDeleteHero}
//                   />
//                 )}
//               />
//               <Route
//                 exact
//                 path="/heroes/:id"
//                 component={() => {
//                   return (
//                     <HeroDetail
//                       hero={selectedHero}
//                       handleCancelHero={this.handleCancelHero}
//                       handleSaveHero={this.handleSaveHero}
//                       key={selectedHero && selectedHero.id}
//                     />
//                   );
//                 }}
//               />
//             </Switch>
//           </div>
//         </div>

//         {showModal && (
//           <ModalYesNo
//             message={`Would you like to delete ${heroToDelete.name}?`}
//             onNo={this.handleCloseModal}
//             onYes={this.handleDeleteFromModal}
//           />
//         )}
//       </div>
//     );
//   }
// }

  // If used connect() instead of redux hooks, replace similar Heroes line with this:
  // const { addHero, deleteHero, getHeroes, heroes, selectHero, selectedHero, updateHero } = props;

// const mapStateToProps = state => {
//   return {
//     heroes: state.heroes.data,
//     heroesLoading: state.heroes.loading,
//     heroesLoadingError: state.heroes.error,
//     selectedHero: state.selectedHero
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     getHeroes: () => {
//       dispatch(loadHeroesAction());
//     },
//     selectHero: hero => {
//       dispatch(selectHeroAction(hero));
//     },
//     updateHero: hero => {
//       dispatch(updateHeroAction(hero));
//     },
//     deleteHero: hero => {
//       dispatch(deleteHeroAction(hero));
//     },
//     addHero: hero => {
//       dispatch(addHeroAction(hero));
//     }
//   };
// };

// const HeroesContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Heroes);

// // export default HeroesContainer;

//#endregion old  Heroes class and connect
