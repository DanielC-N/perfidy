import React from 'react';

import SourceStepSpecDetails from "./SourceStepSpecDetails";
import DisplayStepSpecDetails from "./DisplayStepSpecDetails";
import TransformStepSpecDetails from "./TransformStepSpecDetails";

function StepSpec({spec, deleteCallback, updateCallback}) {
    return <div className="step-spec">
        <div className="step-spec-id">
            <label className="step-spec-field-label" htmlFor={`title-${spec.id}`}>
            {spec.type}
            {" "}
            {spec.id}
            </label>
            <span>
                <input
                    name={`title-${spec.id}`}
                    type="text"
                    value={spec.title}
                    onChange={
                        e => {
                            spec.title = e.target.value;
                            updateCallback(spec)
                        }
                    }/>
            </span>
            <button
                className="delete-step-button"
                onClick={() => deleteCallback(spec.id)}
            >
                x
            </button>
        </div>
        <div className="step-spec-field">
            <label className="step-spec-field-label" htmlFor={`type-${spec.id}`}>Type</label>
            <select
                name={`type-${spec.id}`}
                onChange={
                    e => {
                        spec.type = e.target.value;
                        spec.title = `${spec.type} ${spec.id}`;
                        updateCallback(spec)
                    }
                }
                defaultValue={spec.type}
            >
                {
                    ['Source', 'Transform', 'Display'].map((op, n) => <option key={n} value={op}>{op}</option>)
                }
            </select>
        </div>
        {
            spec.type === "Source"
            &&
            <SourceStepSpecDetails
                spec={spec}
                updateCallback={updateCallback}
            />
        }
        {
            spec.type === "Display" &&
            <DisplayStepSpecDetails
                spec={spec}
                updateCallback={updateCallback}
            />
        }
        {
            spec.type === "Transform" &&
            <TransformStepSpecDetails
                spec={spec}
                updateCallback={updateCallback}
            />
        }
    </div>
}

export default StepSpec;
