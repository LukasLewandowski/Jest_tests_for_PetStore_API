Feature: Adding new pets to the store 

Scenario: Add a new pet to the store
    # Given I login to Petstore service
    When I add a new pet
    Then I can find my new pet in the store

Scenario: Adding a new pet without name should fail
    # Given I login to Petstore service
    When I add new pet without name
    Then I can't find my new pet in the store

Scenario: Adding a new pet without photo should fail
    # Given I login to Petstore service
    When I add new pet without photo
    Then I can't find my new pet in the store
