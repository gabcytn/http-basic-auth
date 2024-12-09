package com.gabcytn.basic_auth.Config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AuthorizeHttpRequestsConfigurer;
import org.springframework.security.config.annotation.web.configurers.CsrfConfigurer;
import org.springframework.security.config.annotation.web.configurers.LogoutConfigurer;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final UserDetailsService userDetailsService;

    public SecurityConfig (UserDetailsService userDetailsService) {
        this.userDetailsService = userDetailsService;
    }

    @Bean
    public AuthenticationProvider authenticationProvider () {
        DaoAuthenticationProvider daoAuthenticationProvider = new DaoAuthenticationProvider();

        daoAuthenticationProvider.setPasswordEncoder(bCryptPasswordEncoder());
        daoAuthenticationProvider.setUserDetailsService(userDetailsService);

        return daoAuthenticationProvider;
    }

    @Bean
    public SecurityFilterChain securityFilterChain (HttpSecurity httpSecurity) throws Exception {
        Customizer<CsrfConfigurer<HttpSecurity>> customizer = new Customizer<CsrfConfigurer<HttpSecurity>>() {
            @Override
            public void customize(CsrfConfigurer<HttpSecurity> httpSecurityCsrfConfigurer) {
                httpSecurityCsrfConfigurer.disable();
            }
        };

        httpSecurity.csrf(customizer);

        Customizer<AuthorizeHttpRequestsConfigurer<HttpSecurity>.AuthorizationManagerRequestMatcherRegistry> registryCustomizer = new Customizer<AuthorizeHttpRequestsConfigurer<org.springframework.security.config.annotation.web.builders.HttpSecurity>.AuthorizationManagerRequestMatcherRegistry>() {
            @Override
            public void customize(AuthorizeHttpRequestsConfigurer<HttpSecurity>.AuthorizationManagerRequestMatcherRegistry authorizationManagerRequestMatcherRegistry) {
                authorizationManagerRequestMatcherRegistry.requestMatchers("/register").permitAll();
                authorizationManagerRequestMatcherRegistry.requestMatchers("/users").hasAuthority("admin");
                authorizationManagerRequestMatcherRegistry.anyRequest().authenticated();
            }
        };

        httpSecurity.authorizeHttpRequests(registryCustomizer);
        httpSecurity.httpBasic(Customizer.withDefaults());

        Customizer<LogoutConfigurer<HttpSecurity>> logoutConfigurerCustomizer = new Customizer<LogoutConfigurer<HttpSecurity>>() {
            @Override
            public void customize(LogoutConfigurer<HttpSecurity> httpSecurityLogoutConfigurer) {
                httpSecurityLogoutConfigurer
                        .logoutUrl("/logout")
                        .deleteCookies("JSESSIONID")
                        .invalidateHttpSession(true)
                        .permitAll()
                        .clearAuthentication(true);
            }
        };

        httpSecurity.logout(logoutConfigurerCustomizer);
        return httpSecurity.build();
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder () {
        return new BCryptPasswordEncoder(12);
    }
}
