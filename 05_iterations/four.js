const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
      console.log(`${key} shortcut is for ${myObject[key]}`);
}