import React from 'react';
import { Box, Typography } from '@mui/material';
import {
  aboutCardHeaderStyles,
  aboutCardTextStyles,
  aboutContentBoxStyles,
  aboutSectionBoxStyles,
} from './aboutStyles.js';

function About(props) {
  return (
    <Box sx={aboutSectionBoxStyles}>
      <Box sx={aboutContentBoxStyles}>
        <Typography variant={'h3'} sx={aboutCardHeaderStyles} id={'about'}>
          О компании
        </Typography>
        <Typography variant={'body1'} sx={aboutCardTextStyles}>
          Компания «ИНТЭКАРТ» (Инновационные технологии электронных карт)
          активно работает на рынке геоинформационных технологий с 2005 года и
          специализируется в области создания электронных и цифровых карт
          местности территорий земного шара различного назначения на основе
          обработки данных дистанционного зондирования Земли.
        </Typography>
        <Typography variant={'body1'} sx={aboutCardTextStyles}>
          Компания эффективно внедряет в современные технологии создания
          электронных карт собственные инновационные технологические разработки
          , что существенно расширяет возможности использования
          геоинформационных технологий в узких сегментах рынка и обеспечивает
          высокое качество результата выполняемых работ.
        </Typography>
        <Typography variant={'body1'} sx={aboutCardTextStyles}>
          Коллектив компании сформирован из высококвалифицированных
          специалистов, обладающих необходимыми знаниями в сфере создания
          навигационных и геоинформационных систем. Профессионализм,
          ответственность, творческий подход к выполнению заказа – основные
          характеристики наших сотрудников. Благодаря их опыту была создана
          постоянно обновляющаяся большая база картографических материалов, что
          способствует быстрому предоставлению нашим клиентам необходимой
          информации.
        </Typography>
        <Typography variant={'body1'} sx={aboutCardTextStyles}>
          За годы работы компанией «ИНТЭКАРТ» успешно реализовано большое
          количество современных геоинформационных проектов и решений.
          Надежность нашей компании подтверждается прочно налаженными
          партнёрскими отношениями с предприятиями Росреестра и ведущими
          предприятиями по созданию навигационных карт. Сегодня компания
          «ИНТЭКАРТ» продолжает развиваться по всем основным направлениям
          деятельности и неустанно работает над совершенствованием технологий
          для производства качественной продукции в кратчайшие сроки.
        </Typography>
        <Typography variant={'body1'} sx={aboutCardTextStyles}>
          Мы ориентированы на построение долгосрочных отношений, стараемся
          предлагать своим партнерам лучшие условия сотрудничества и будем рады
          видеть вас в числе наших партнеров. Надеемся, что наше сотрудничество
          будет успешным и плодотворным. Заранее благодарим вас за желание и
          готовность к совместной работе.
        </Typography>
      </Box>
    </Box>
  );
}

export default About;