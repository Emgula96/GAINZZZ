import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    getUserPersonalInfo,
    getTrainers,
    sendAccountInformation,
} from '../../actions/accountInformation'
import "../../css/accountInformation.css"

const AccountInformation = () => {
  const dispatch = useDispatch();
  const trainerDropDownList = useSelector((state) => state.trainers.trainerDropDownList);
  const personalInformation = useSelector((state) => state.personalInfo.accountInfo)
  const [value, setValue] = useState(1);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

useEffect(
    () => {
      getTrainers(dispatch);
      getUserPersonalInfo(dispatch)
    },
    // eslint-disable-next-line
    []
);

return (
    <>
        <div className="accountInformationContainer">
            <div className="accountInformationForm">
                <h1 className="title">Please enter your personal information</h1>
                <div>
                    <form>
                        <div>
                            <label htmlFor="height">Height</label>
                            <input
                                type="text"
                                className="height"
                                placeholder="Enter your height"
                            />
                        </div>
                        <div>
                            <label htmlFor="gender">gender</label>
                            <input
                                type="text"
                                className="gender"
                                placeholder="Enter your gender"
                            />
                        </div>
                        <div>
                            <label htmlFor="weight">weight</label>
                            <input
                                type="text"
                                className="weight"
                                placeholder="Enter your weight"
                            />
                        </div>
                        <div>
                            <label htmlFor="bmi">
                                bmi. (If you do not know it, leave it blank.)
                            </label>
                            <input
                                type="text"
                                className="bmi"
                                placeholder="Enter your bmi"
                            />
                            <div>
                                <label htmlFor="age">age</label>
                                <input
                                    type="text"
                                    className="age"
                                    placeholder="Enter your age"
                                />
                            </div>
                            <div>
                                <label htmlFor="bodyfat">
                                    bodyfat percentage (If you do not know it,
                                    leave it blank.)
                                </label>
                                <input
                                    type="text"
                                    className="bodyfat"
                                    placeholder="Enter your bodyfat percent"
                                />
                            </div>
                            <div>
                                <label htmlFor="totalBurnedCalories">
                                    total burned calories. (If you do not know it,
                                    leave it blank.)
                                </label>
                                <input
                                    type="text"
                                    className="totalBurnedCalories"
                                    placeholder="Enter your total burned calories"
                                />
                            </div>
                            <div>
                                <label htmlFor="personalTrainer">
                                    select personal trainer
                                    <select value={value} onChange={handleChange}>
                                        {trainerDropDownList.map(trainer => (
                                            <option
                                                key={trainer.id}
                                                value={trainer.id}
                                            >
                                                {trainer.ptName}
                                            </option>
                                        ))}
                                    </select>
                                </label>
                            </div>
                            <button onClick={e => sendAccountInformation(e)}>
                                Submit
                            </button>
                            <button>Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div>
        <h1>
            Personal Information
        </h1>
        <div>
            {personalInformation?.map((info) => {
                return (
                    <p>Height: {info?.height}</p>
                )
            })}
        </div>
        </div>
    </>
)
};

export default AccountInformation;
