
Example WebApplication:<br><br>
<iframe frameborder="0" width="100%" height="700px" src="https://repl.it/@JulianFun/AccountsImplementation?lite=true#Main.java"></iframe>


[Fullscreen example](https://accountsimplementation--julianfun.repl.co/)

## Installation
```xml
<repositories>
<repository>
    <id>javawebstack</id>
    <url>https://repo.javawebstack.org</url>
</repository>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>

<dependencies>
<dependency>
    <groupId>com.github.interaapps</groupId>
    <artifactId>accounts-java-client</artifactId>
    <version>1.0.3</version>
</dependency>
<dependency>
    <groupId>org.javawebstack</groupId>
    <artifactId>HTTP-Server</artifactId>
    <version>1.0-SNAPSHOT</version>
</dependency>
</dependencies>
```

### Usage
See more in example in the top of the page
```java
OAuth2Client oauthClient = new OAuth2Client(clientId, clientSecret);
oauthClient.addScopes("user:read");

// Creating redirect url
String url = oauthClient.createAuthorizationURL().setRedirectUrl(CALLBACK_URL).build();
System.out.println(url);

// Callback
OAuth2TokenExchangeResponse exchangeResponse = oauthClient.exchangeToken(CODE);

if (!oauthClient.checkScopes(exchangeResponse.getScopeList()))
    return "You haven't got enough permissions";

UserResponse user = exchangeResponse.getProfile();
System.out.println("Hello "+user.getFullName()+"!");

```