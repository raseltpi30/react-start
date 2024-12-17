import { useState } from "react";
import { useHistory } from "react-router-dom";
const Create = () => {
    const [title, SetTitle] = useState('New Set Title');
    const [body, SetBody] = useState('New Set Body');
    const [author, SetAuthor] = useState('Rasel');
    const [isPending, SetIsPending] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }

        SetIsPending(true);

        fetch('http://localhost:5000/blogs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(blog),
        }).then(() => {
            console.log('New Blog Created Successfully');
            setTimeout(() => {
                SetIsPending(false);  // Update state after a certain delay
                history.push('/'); 
            }, 1500);
             // Redirect to home page after creating a blog
        })
    }
    return (
        <div className="create home">
            <h2>Create a new blog</h2>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="title">Blog Title:</label>
                <input type="text" id="title" required value={title} onChange={(e) => SetTitle(e.target.value)} />

                <label htmlFor="body">Blog Body:</label>
                <textarea value={body} onChange={(e) => SetBody(e.target.value)} id="body" required placeholder="Write your blog content here..."></textarea>

                <label htmlFor="blog_author">Blog Author:</label>
                <select value={author} onChange={(e) => SetAuthor(e.target.value)} id="blog_author" required>
                    <option value="">Select Author</option>
                    <option value="Rasel">Rasel</option>
                    <option value="Ripon">Ripon</option>
                    <option value="Rayhan">Rayhan</option>
                </select>

                {!isPending && <button type="submit">Create Blog</button>}
                {isPending && <button type="submit" disabled>Create Blog....</button>}
            </form>

        </div>
    );
}

export default Create;