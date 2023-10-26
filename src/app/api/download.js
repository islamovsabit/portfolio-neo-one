export default (req, res) => {
    res.setHeader('Content-Disposition', 'attachment; filename="example.txt"');
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is the content of the file.');
};