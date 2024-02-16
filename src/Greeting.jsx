// creates a new function greeting. Keep in mind &quot; is an escape code to render " " 
function Greeting () {
    return <h1>&quot;I swear by my trusty partner in crime, Palmer. We will get you.&quot;</h1>;
}
function Intro () {
    return (
        <div>
            <h2>
                Location: I know you're hiding somewhere west of the missippi.
            </h2>
            <p>
                I need to come up with a list of major cities. I know you will choose this because you believe in hiding in plain sight.
                Los Angeles? San Francisco? Phoenix? Great starting places.
            </p>
        </div>
    );
}




// export newly created components so that parent components can use it as a child!
export {Greeting, Intro};