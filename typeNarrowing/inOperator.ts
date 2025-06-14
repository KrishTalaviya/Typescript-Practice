type UserProfile = {
    id: number;
    name: string;
    email: string;
  };
  
  type ErrorResponse = {
    error: string;
    statusCode: number;
  };
  
  type ApiResponse = UserProfile | ErrorResponse;
  function handleResponse(response: ApiResponse) {
    if ('error' in response) {
      // response is ErrorResponse
      console.error(`Error ${response.statusCode}: ${response.error}`);
    } else {
      // response is UserProfile
      console.log(`Welcome back, ${response.name}!`);
    }
  }
//do more example fom chatgpt    