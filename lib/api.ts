import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

export const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  // .md 파일명이 존재할 경우, slug만 남긴다.
  const realSlug = slug.replace(/\.md$/, "");
  // 해당 파일이 존재하는 전체 경로를 지정해준다.
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  // file 내용을 읽고 해당 파일의 내용을 읽어온다.
  const fileContents = fs.readFileSync(fullPath, "utf8");
  // string을 object 형식으로 변환해준다.
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // 열람하고자 하는 페이지의 필드만을 리턴할 값으로 지정한다.
  fields.forEach((field) => {
    if (field === "slug") {
      // 여기서 post의 slug를 넣어준다.
      items[field] = realSlug;
    }
    if (field === "content") {
      // 여기서 post의 content를 넣어준다.
      items[field] = content;
    }

    if (data[field]) {
      // console.log(data[field]);
      items[field] = data[field];
    }
  });

  return items;
}

export function getPostByDirectory(directory: string, fields: string[] = []) {
  // console.log("directory", directory);
  const fileContents = fs.readFileSync(directory, "utf8");
  // string을 object 형식으로 변환해준다.
  const { data, content } = matter(fileContents);

  // console.log("data", data);
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
      // console.log(data[field]);
      items[field] = data[field];
    }
  });
  // console.log("items", items);

  return items;
}

export function getAllPosts(fields: string[] = []) {
  // 폴더 디렉토리의 파일들을 전부 불러온다.
  const slugs = getPostSlugs();
  // posts 내용들을 slug(key)-title(value) 형태로 변환한 후, A-Z 순서로 정렬한다.
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getAllPostsByDirectory(
  directory: string,
  files_?: string[] | never[],
  fields?: string[]
) {
  let contents: { [key: string]: string }[] = [];
  const _files = files_ || [];
  const files = fs.readdirSync(directory);
  files.forEach((file) => {
    const newName = directory + "/" + file;
    // 디렉토리에 파일이 존재하면 해당 함수를 한번 더 호출한다.
    if (fs.statSync(newName).isDirectory()) {
      // 존재 하지 않으면 배열에 값을 넣는다.
      getAllPostsByDirectory(newName, _files);
    } else {
      _files.push(newName);
    }
  });

  _files.forEach((file) => {
    contents.push(getPostByDirectory(file, fields));
  });

  contents.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return contents;
}
