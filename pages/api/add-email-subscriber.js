export default (req, res) => {
    const emailAddress = req.body.emailAddress;
    // TODO Insert into MongoDB
    res.status(200).end();
}