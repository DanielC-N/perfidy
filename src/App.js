import React, {useState} from 'react';

import StepSpec from "./components/StepSpec";

import './App.css';

function App() {
    const [specSteps, setSpecSteps] = useState([]);
    const [nextStepId, setNextStepId] = useState(1);
    return (
        <div className="App">
            <header className="App-header">

                <h1 className="program-title"><img className="logo" src={"favicon.ico"} alt="Perfidy Logo"/>Perfidy</h1>
            </header>
            <div className="content">
                <div className="spec-pane">
                    <div className="spec-inner">
                        <h2 className="spec-title">Spec
                            <button
                                className="add-step-button"
                                onClick={
                                    () => {
                                        setSpecSteps(
                                            [
                                                ...specSteps,
                                                {
                                                    id: nextStepId,
                                                    title: `New Step ${nextStepId}`,
                                                    type: "Source",
                                                    sourceLocation: "local",
                                                    localValue: ""
                                                }
                                            ]
                                        );
                                        setNextStepId(nextStepId + 1);
                                    }
                                }
                            >
                                +
                            </button>
                        </h2>
                        {
                            specSteps.map(
                                (ss, n) =>
                                    <StepSpec
                                        key={n}
                                        spec={ss}
                                        deleteCallback={deleteId => setSpecSteps(specSteps.filter(v => v.id !== deleteId))}
                                        updateCallback = {newSpec => setSpecSteps(specSteps.map(v => v.id === newSpec.id ? newSpec : v))}
                                    />
                            )
                        }
                    </div>
                </div>
                <div className="result-pane">
                    <div className="result-inner">
                        <h2 className="result-title">Result</h2>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
