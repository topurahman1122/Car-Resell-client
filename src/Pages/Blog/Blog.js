import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='px-4 py-16 col-span-9 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title"> What are the different ways to manage a state in a React application?</h2>
                            <p>In React apps, there are at least seven ways to handle the state. Let us briefly explore a few of them in this part.It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-info text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title"> How does prototypical inheritance work?</h2>
                            <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>

                        </div>
                    </div>
                    <div className="card w-96 bg-secondary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">  React vs. Angular vs. Vue?</h2>
                            <p>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                        </div>
                    </div>
                    <div className="card w-96 bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title"> What is a unit test? Why should we write unit tests?</h2>
                            <p>The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                                <br />
                                <br />
                                <span className='font-bold'> Working of Node.js:</span> Node.js accepts the request from the clients and </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Blog;