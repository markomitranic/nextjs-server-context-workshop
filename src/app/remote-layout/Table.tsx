import { RouteUrlDefinition } from "./getAlternateUrls";

export function Table({alternateLinks}: {alternateLinks: RouteUrlDefinition[]}) {
  return (
    <table border={1}>
      <tbody>
        <tr>
          <td>Locale</td>
          <td>Changed?</td>
          <td>Type</td>
          <td>URL</td>
        </tr>
        {alternateLinks.map((link, key) => (
          <tr key={key}>
            <td>{link.locale}</td>
            <td>{link.changedLocale ? "✅" : "❌"}</td>
            <td>{link.type}</td>
            <td>{link.href}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
