let array = ["|", "/", "-", "\\", "|"];
let count = 200;
for (let i of array) {
  setTimeout(() => {
    process.stdout.write(`\r${i}   `);
  }, count);
  count += 700;
}
