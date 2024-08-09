import { column, defineDb, defineTable } from 'astro:db';


const GamesDB = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    released: column.text(),
    companie: column.text(),
    poster: column.text(),
    state: column.text(),
    hours: column.number(),
    dateStart: column.text(),
    dateEnd: column.text(),
    achievementsObtained: column.number(),
    achievementsTotals: column.number(),
    platform: column.text(),
  }
})



// https://astro.build/db/config
export default defineDb({
  tables: {
    GamesDB,
  }
});
