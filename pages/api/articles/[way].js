import fs from "fs";
import path from "path";
import MarkdownIt from "markdown-it";

export default (req, res) => {
  const { way } = req.query;
  const pathWay = path.resolve(`public/content/articles/${way}.md`);
  const data = fs.readFileSync(pathWay);
  const md = new MarkdownIt();

  res.status(200).json({ content: md.render(data.toString()) });
};
