# Footer

Для редактирования пунктов правого и левого меню редактируйте файл `rest-api/footer/list.json`.

Левое меню описано в `leftMenu`, правое - в `rightMenu`.

Пример конфига:

```json
{
  "leftMenu": [
    {
      "name": "Copyright 2024"
    }
  ],
  "rightMenu": [
    {
      "name": "Обратная связь",
      "uri": "/contacts",
      "hidden": true
    },
    {
      "name": "Главная страница",
      "uri": "/"
    },
    {
      "name": "Помощь",
      "uri": "/reader/help"
    }
  ]
}
```

Описание параметров:

- `hidden` отвечает за скрытие пункта меню.
- `name` отображаемая надпись
- `uri` относительная ссылка
