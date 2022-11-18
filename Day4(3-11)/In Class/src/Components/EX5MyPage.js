import React from "react";

const EX5MyFeature = React.lazy(() =>
Promise.all([
    import("./EX5MyFeature"),
    new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 3000);
    }),
]).then(([m]) => m)
);

function EX5MyPage() {
    return (
        <>
         <h1>EX5MyPage</h1>
         <EX5MyFeature />
        </>
    );
}

export default EX5MyPage;