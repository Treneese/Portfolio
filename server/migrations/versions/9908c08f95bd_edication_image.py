"""Edication image.

Revision ID: 9908c08f95bd
Revises: 299cee898d14
Create Date: 2024-07-20 21:37:59.250388

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '9908c08f95bd'
down_revision = '299cee898d14'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('educations', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('educations', schema=None) as batch_op:
        batch_op.drop_column('image')

    # ### end Alembic commands ###
