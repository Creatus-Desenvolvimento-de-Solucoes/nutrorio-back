// import { Prisma } from '@prisma/client';
// import database from './database';

// (async (data: Prisma.ScheduleCreateInput) => {
// const schedules = await database.schedule.findMany({
//     where: {
//         patientId: '63178718639b0dfa3590af25',
//     },
//     select: {
//         patient: {
//             select: {
//                 gender: true,
//                 name: true,
//             },
//         },
//     },
// });
// console.log(schedules);
// const patient = await database.patient.create({
//     data: {
//         name: 'John Doe',
//         gender: 'batata',
//         Schedule: {
//             create: {
//                 date: new Date(),
//             },
//         },
//     },
//     select: {
//         gender: true,
//         name: true,
//         Schedule: {
//             select: {
//                 date: true,
//             },
//         },
//     },
// });
// console.log(patient);
// await database.user.create({
//     data: {
//         name: 'John Doe',
//         email: 'teste@teste.com',
//         birthdayDate: '05/05/1990',
//         password: '123456',
//         phoneNumber: '123456789',
//     },
// });
// await database.schedule.create({
//     data: {
//         patientId: '63178718639b0dfa3590af25',
//         userId: '6317863f1007df74ba6548dd',
//         date: new Date(),
//     },
// });
// const schedules = await database.schedule.findMany({
//     where: {
//         patient: {
//             id: '63178718639b0dfa3590af25',
//         },
//     },
//     include: {
//         patient: true,
//         User: true,
//     },
// });
// console.log(schedules);
// })();
