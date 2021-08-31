import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostByFileDirectory(
  directory: string,
  fields: string[] = []
) {
  const fileContents = fs.readFileSync(directory, "utf8");
  // string을 object 형식으로 변환해준다.
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // 열람하고자 하는 페이지의 필드만을 리턴할 값으로 지정한다.
  fields.forEach((field) => {
    if (field === "content") {
      // 여기서 post의 content를 넣어준다.
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getSubFiles(directory: string, files_?: string[] | never[]) {
  const _files = files_ || [];
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    const newName = directory + "/" + file;
    // 디렉토리에 파일이 존재하면 해당 함수를 한번 더 호출한다.
    if (fs.statSync(newName).isDirectory()) {
      // 존재 하지 않으면 배열에 값을 넣는다.
      getSubFiles(newName, _files);
    } else {
      _files.push(newName);
    }
  });
  return _files;
}

export function getAllPostsByDirectory(directory: string, fields: string[]) {
  let contents: { [key: string]: string }[] = [];
  const files = getSubFiles(directory);
  files.forEach((file) => contents.push(getPostByFileDirectory(file, fields)));
  contents.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return contents;
}
