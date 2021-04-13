const { application } = require("express");

async function dininghalls(){
    const request = await fetch("/api/dining");
    const data = await request.json();
}

const staticFolder = 'public';
app.use(express.static(staticFolder));
app.use('/api', apiRoutes);
