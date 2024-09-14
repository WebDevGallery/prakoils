module.exports = async (req, res) => {
    // Handle different HTTP methods
    switch (req.method) {
        case 'GET':
            // Handle GET request
            res.status(200).json({ message: 'Hello from the backend!' });
            break;
        
        case 'POST':
            // Handle POST request (e.g., processing form data)
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({ message: 'Name is required' });
            }
            res.status(200).json({ message: `Hello, ${name}!` });
            break;

        // Handle other HTTP methods like PUT, DELETE if necessary
        case 'PUT':
            res.status(200).json({ message: 'PUT request handled' });
            break;

        case 'DELETE':
            res.status(200).json({ message: 'DELETE request handled' });
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
            res.status(405).end(`Method ${req.method} Not Allowed`);
            break;
    }
};
