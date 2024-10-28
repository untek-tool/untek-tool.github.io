# Навигационная панель

Для редактирования пунктов правого и левого меню редактируйте файл `rest-api/navbar/list.json`.

Надпись брэнда на панели описана в `brandTitle`.
Левое меню описано в `leftMenu`, правое - в `rightMenu`.

```json
{
  "brandTitle": "",
  "leftMenu": [
    {
      "name": "Главная страница",
      "uri": "/",
      "hidden": false
    },
    {
      "name": "REST API Docs",
      "uri": "/reader/rest-api-doc"
    }
  ],
  "rightMenu": []
}
```

Описание параметров:

- `hidden` отвечает за скрытие пункта меню.
- `name` отображаемая надпись
- `uri` относительная ссылка
