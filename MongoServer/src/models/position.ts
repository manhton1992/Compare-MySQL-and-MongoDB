/**
 * Position Model
 */

/**
 * pakage import
 */
import {Document, Schema, Model, model} from 'mongoose';
/**
 * @Description interface for Position
 * @export
 * @extends {mongoose}
 * @interface IPositionModel
 * 
 */

export interface IPositionModel extends Document{
    lon: number;
    lat: number;
    aircraftId: string;
    sendTime: Date;
    created_at: Date;
}

export const positionSchema : Schema = new Schema({
    lon: {
        type : Number,
        required : true,
        default: 0,
    },
    lat : {
        type: Number,
        required: true,
        default: 0,
    },
    aircraftId: {
        type: String,
        required: true,
    },
    sendTime: {
        type: Date,
        required: true,
        default: '2020-05-22T17:18:15.437Z',
    }
},
{
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
});

export const positionModel: Model<IPositionModel> = model<IPositionModel>('Position', positionSchema);