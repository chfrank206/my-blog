import { Query } from './index';


const allBlogs = async () => Query('SELECT Blogs.*, Authors.name from Blogs JOIN Authors on Blogs.authorid=Authors.id ORDER BY Blogs._created DESC');
const oneBlog = async (id: number) => Query('SELECT * FROM Blogs WHERE id = ?', [id]);
const newBlog = async (authorid: number, content: string, title: string) => Query('INSERT INTO Blogs (authorid, content, title) VALUES (?)', [authorid, content, title]);
const delBlog = async (id: number) => Query('DELETE FROM Blogs WHERE id = ?', [id]);
const updateBlog = async (title: string, content: string,  id: number,) => Query(`UPDATE Blogs Set title = "${title}", content = "${content}" WHERE id = ${id} `);




export default {
    allBlogs,
    oneBlog,
    newBlog,
    delBlog,
    updateBlog
};
