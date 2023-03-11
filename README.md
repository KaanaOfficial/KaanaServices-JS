# 🚀 Kaana Services JS Library

The Kaana Services JS Library is a JavaScript library that can be used by all Kaana apps to interact with Kaana Auth. This library uses the Kaana Auth API endpoint to retrieve user data and utilizes Pinia as a local store for data management.

## Installation

To install the Kaana Services JS Library, run the following command in your project directory using:

```bash
npm install kaana-services-js
```

## Usage

### Importing the Library

To use the Kaana Services JS Library in your application, import it as follows:

```js
import { useAuthStore } from "kaana-services-js";
```

## Retrieving User Data

To retrieve user data, call the appropriate function on the `useAuthStore` object. For example, to retrieve the user profile information, call the `fetchUserProfile` action with the user ID and access token:

```js
const authStore = useAuthStore();
await authStore.fetchUserProfile("123", "myToken");
const userProfile = authStore.userProfile;
```

Similarly, you can call the `fetchPersonalPreferences`, `fetchAccountDetails`, `fetchActivityHistory`, and `fetchRecommendations` actions to retrieve personal preferences, account details, activity history, and recommendations, respectively.

## Error Handling

If an error occurs during the API call, an error will be thrown. You can catch the error as follows:

```js
try {
  await authStore.fetchUserProfile("123", "myToken");
} catch (error) {
  console.error(error);
}
```

## Token-Based Security

To ensure token-based security, you must pass the user's access token to the appropriate function. The access token will be included in the HTTP request headers.

# API Reference

`useAuthStore`
The `useAuthStore` function returns a Pinia store with the following state properties and actions:

State Properties

- `userProfile`: User profile information.
- `personalPreferences`: User personal preferences.
- `accountDetails`: User account details.
- `activityHistory`: User activity history.
- `recommendations`: User recommendations.

Actions

- `fetchUserProfile(userId: string, token: string)`: Retrieves the user profile information.
- `fetchPersonalPreferences(userId: string, token: string)`: Retrieves the user personal preferences.
- `fetchAccountDetails(userId: string, token: string)`: Retrieves the user account details.
- `fetchActivityHistory(userId: string, token: string)`: Retrieves the user activity history.
- `fetchRecommendations(userId: string, token: string)`: Retrieves the user recommendations.

# Example

Here's an example of how you could use the Kaana Services JS Library in a Nuxt 3 component:

```js
<template>
  <div>
    <h1>Welcome, {{ userProfile.name }}!</h1>
    <p>Email: {{ userProfile.email }}</p>
  </div>
</template>

<script>
import { useAuthStore } from 'kaana-services-js';

export default {
  async asyncData({ store }) {
    const authStore = useAuthStore();
    await authStore.fetchUserProfile('123', 'myToken');
    return { userProfile: authStore.userProfile };
  },
};
</script>
```

## Contributing

We welcome contributions from the community! If you have an idea for a new feature or have found a bug, please open an issue in this repository. If you would like to contribute code, please fork this repository and create a pull request with your changes.

## 👨‍💻 Contributors

<a href="https://github.com/KaanaOfficial/Mention/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=KaanaOfficial/Mention" />   
</a>

## License

Kaana Services is distributed under the MIT license. See the [LICENSE](./LICENSE) file for more information.
