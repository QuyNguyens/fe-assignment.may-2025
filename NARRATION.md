# Result Narration Checklist


- [ ] A1: Layout Implementation. UI Framework: _________
  - [ ] Screen 1
  - [ ] Screen 2
  - [ ] Screen 3

- [ ] A2: JSON form rendering components. Libaries used: ______________________
  - [ ] Implement a component that receive JSON Schemas input (via a text box) and render HTML forms.
  - [ ] Implement a custom input component (embedded within the JSON schema renderer) to input new Vietnamese address field
  - [ ] Form content is saved to the state store and persist across page refreshes.
  - [ ] There should be a reset action to reset the data in the store.

- [ ] A3: Paginated component. Libraries used: ____________________
  - [ ] Implement a component that render the data as paginated tables.
  - [ ] Data can be converted into JSON before use.
  - [ ] Allow sorting and change sorting order by clicking the table header.
  - [ ] Allow filter by each columns values.
  - [ ] The current page & active filter must be saved to the state store and persist across page refreshes


# explain A2
Actually, at first I didn't really understand the A2 assignment requirements, but I tried to learn and implement two different approaches to ensure the assignment was valuable:

- The first way, I created a component-based renderer that can read jsonSchema and automatically generate corresponding inputs. It supports many types of fields such as text, email, password, radio, checkbox and submit.

- The second way, I built a form that can get addresses in Vietnam, also based on the data in jsonSchema.

I have prepared two JSON files (formJson and addressJson) in the data directory, which can be used to test directly with this rendered form.

Although I'm not sure I understood the whole problem correctly, I tried to complete it by applying the ability to parse JSON and build a user interface from the data.