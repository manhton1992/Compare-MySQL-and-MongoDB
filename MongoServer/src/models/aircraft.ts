/**
 * aircraft model
 */

 /**
  * package imports
  */

 import {Document, Schema, Model, model} from 'mongoose';

 /**
  * @description interface for aircraft
  * @export 
  * @interface IAirCraftModel
  * @extends {mongoose}
  */

  export interface IAirCraftModel extends Document{
      name: string;
      title?: string;
      created_at: Date;
  }

  export const aircraftSchema : Schema = new Schema({
        name : {
            type: String,
            default: "Viet Nam Airline",
            required: true,
        },
        title : {
            type: String,
            required: false,
            default: 'Boeing',
        }
  }, 
  {
      timestamps: {
          createdAt: 'created_at',
          updatedAt: 'updated_at',
      }
  });
  export const aircraftModel : Model<IAirCraftModel> = model<IAirCraftModel>('Aircraft', aircraftSchema);
