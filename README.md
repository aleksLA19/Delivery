# Delivery

Макет страниц в Figma: https://www.figma.com/design/OzBfFBVa8oYVojSU8NTjYQ/Untitled?node-id=0-1&p=f&t=UA7hVTMf2OSJOphK-0

## О проекте

Лендинг и форма оформления заказа для сервиса доставки. Проект выполнен по макету из Figma и включает две страницы: Главная страница — презентация услуг, статистика компании, призыв к действию Страница оформления заказа — форма с выбором региона, вводом данных отправителя/получателя и динамическим расчётом деталей заказа

## Технологический стек

Vite - Сборка проекта, быстрая разработка и горячая перезагрузка 

SCSS/Sass - Препроцессор для стилизации (вложенность, переменные, миксины) 

Fontello - Иконочный шрифт для графических элементов 

npx - Запуск пакетов без глобальной установки 

JavaScript - Валидация форм и интерактивность

## Схематичный макет сайта:
<img width="1082" height="865" alt="image" src="https://github.com/user-attachments/assets/434ca699-2668-4b80-986a-dad5c553e931" />

## Главная страница (index.html)

### Секции:

Header — навигация: Главная / Оформить заказ / Контакты + кнопка вызова действия 

Статистика — ключевые показатели: 85+ регионов, 1.2M доставок, 99% успешных доставок

Услуги — 6 карточек с описанием услуг компании: Письма и корреспонденция Посылки и пакеты Срочная доставка Корпоративным клиентам Отслеживание онлайн Ценные отправления 

Ready-блок — призыв к действию «Готовы к отправке?» 

Footer — логотип, навигация, копирайт

## Страница заказа (page-order.html)

### Секции:

Header Заголовок — «Оформить заказ» Выбор региона отправителя — кнопки с городами (Москва, СПБ, Новосибирск и др.) 

Форма отправки с валидацией на JS: 

Переключение: Физическое лицо / Юридическое лицо 

Поля: Фамилия, Имя, Отчество, Телефон, Email, Паспорт 

Детали доставки: Адрес отправки, Город получателя, Адрес получателя, Тип отправления, Дата, Время 

Текстовая область для комментария 

Блок «Детали заказа» с динамическим отображением выбранных данных 

Кнопка отправки заказа 

Footer

## Особенности реализации

### Стилизация (SCSS)

Использование переменных для цветов, шрифтов и брейкпоинтов 

Вложенность селекторов по методологии БЭМ 

Миксины для адаптива и переиспользуемых стилей

### Валидация форм (JavaScript)

Проверка обязательных полей перед отправкой 

Маска ввода для телефона 

Валидация email и номера паспорта 

Динамическое обновление блока «Детали заказа» при заполнении формы

### Иконки (Fontello)

Сгенерированный шрифт с иконками для карточек услуг 

Лёгкое подключение через CSS





# Delivery

Page layout in Figma: https://www.figma.com/design/OzBfFBVa8oYVojSU8NTjYQ/Untitled?node-id=0-1&p=f&t=UA7hVTMf2OSJOphK-0

## About the project

Landing page and order form for a delivery service. The project was created using a Figma layout and includes two pages: Home page — presentation of services, company statistics, call to action; Checkout page — form with region selection, sender/recipient data entry, and dynamic order details calculation.

## Tech Stack

Vite - Project build, rapid development, and hot reloading

SCSS/Sass - Preprocessor for styling (nesting, variables, mixins)

Fontello - Icon font for graphic elements

npx - Running packages without global installation

JavaScript - Form validation and interactivity

## Website layout:
<img width="1082" height="865" alt="image" src="https://github.com/user-attachments/assets/434ca699-2668-4b80-986a-dad5c553e931" />

## Home Page (index.html)

### Sections:

Header — navigation: Home / Place an order / Contacts + call to action button

Statistics — key metrics: 85+ regions, 1.2M deliveries, 99% successful delivery rate

Services — 6 cards describing the company's services: Letters and correspondence, Parcels and packages, Express delivery, Corporate clients, Online tracking, Valuable shipments

Ready block — call to action "Ready to ship?"

Footer — logo, navigation, copyright

## Order Page (page-order.html)

### Sections:

Header — "Place an Order" Sender Region Selection — City Buttons (Moscow, St. Petersburg, Novosibirsk, etc.)

Submit Form with JS Validation:

Switch: Individual / Legal Entity

Fields: Last Name, First Name, Middle Name, Phone, Email, Passport

Delivery Details: Shipping Address, Recipient City, Recipient Address, Shipment Type, Date, Time

Text Area for Comments

"Order Details" Block with Dynamic Display of Selected Data

Submit Order Button

Footer

## Implementation Features

### Styling (SCSS)

Using Variables for Colors, Fonts, and Breakpoints

Nesting Selectors Using the BEM Methodology

Mixins for responsive and reusable styles

### Form validation (JavaScript)

Validation of required fields before submitting

Input mask for phone number

Email and passport number validation

Dynamic updating of the "Order Details" block when filling out a form

### Icons (Fontello)

Generated font with icons for service cards

Easy integration via CSS
