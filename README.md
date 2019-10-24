# Boilerplate

### The Config File

Outlined below are the default values that appear on a fresh Boilerplate site. Plugins may define their own values so you will need to refer to the docs for those plugins.

| Key |Description |
|---|---|
| `admin_mode` | When set to `true`, will display an Admin UI for installing plugins, only works on localhost and when `environment === dev` |
| `url` | The site's full URL, including protocol. `e.g. https://example.co.uk` |
| `company` | The company/site name |
| `email` | Site e-mail address, required by the Form plugin |
| `environment` | Current site environment, used by Boilerplate and plugins to determine whether you're developing or if the site is live. Use `dev` or `prod`. |
| `force_url` | Only used if `environment === prod`. Forces the site `url` for all requests. |
| `analytics` | Google Analytics property ID, required by Google Analytics plugin, not used otherwise. |
| `stylesheets` | Site-wide stylesheets, add in key value pairs `e.g. main: ~/css/style.css` the `~` character is used to represent the `assets_dir`, which is `/_templates/assets` by default. |
| `forms` | Configuration for your forms, see the Form plugin `docs` for full documentation. |

### Local Server

If you have PHP installed on your local machine, you can use the built-in local server to test your Boilerplate site. To do so, open your terminal and `cd` in to your site's directory and run `php serve`. Your site will now be running on `localhost:8000`. To stop the local server, type `Ctrl + C` in the terminal.
