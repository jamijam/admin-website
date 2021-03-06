const defaultUrl =
  "https://govtechsg.github.io/certificate-web-ui/exampleIssuers.json";

export default function fetchIssuers(url = defaultUrl) {
  return window
    .fetch(url)
    .then(res => res.json())
    .then(json => json.issuers)
    .catch(console.error); // eslint-disable-line
}
