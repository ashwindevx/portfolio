async function fetchGraphQL(query) {
  return fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json());
}

export async function fetchedData() {
  const entry = await fetchGraphQL(`
    query {
      user(username: "ashhwin") {
        publication {
          posts {
            title
            slug
            dateAdded
          }
        }
      }
    }
  `);
  return entry;
}
