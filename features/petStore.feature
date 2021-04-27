Feature: Everything about your Pets 

Scenario: Add a new pet to the store
    # When Finds Pets by status
    When I add a new pet
    Then I can find my new pet in the store
