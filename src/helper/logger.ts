import tracer from "tracer"
import colors from "colors"
export const loggerErr = tracer.colorConsole({
    format:'{{title}}\t{{timestamp}} {{message}}\n{{stack}}',
    filters: {
        //log : colors.black,
        trace: colors.magenta,
        debug: colors.blue,
        info: colors.green,
        warn: colors.yellow,
        error: [colors.red, colors.bold]
    },
    dateformat: 'HH:MM:ss.L'
});
export const logger = tracer.colorConsole({
    format:'[{{path}}:{{line}}]\t{{title}}\t{{timestamp}} {{message}}\t\t',
    filters: {
        //log : colors.black,
        trace: colors.magenta,
        debug: colors.blue,
        info: colors.green,
        warn: colors.yellow,
        error: [colors.red, colors.bold]
    },
    dateformat: 'yyyy/mm/dd HH:MM:ss.L'
})